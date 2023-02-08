let csvToJson = require('convert-csv-to-json');
const express = require('express');
const PORT = process.env.PORT || 3000;
const BookFile = "Books.csv";
const fs = require("fs");

class Book {
    constructor(title = "", isbn="", authors="", description="") {
        this.title = title;
        this.isbn = isbn;
        this.authors = authors;
        this.description = description;
    }
    saveAsCSV() {
        const csv = `${this.title},${this.isbn},${this.authors},${this.description}\n`;
        try {
            fs.appendFileSync("./Books.csv", csv);
        } catch (err) {
            console.error(err);
        }
    }
}

class Magazine {
    constructor(title = "", isbn="", authors="", publishedAt="") {
        this.title = title;
        this.isbn = isbn;
        this.authors = authors;
        this.publishedAt = publishedAt;
    }
    saveAsCSV() {
        const csv = `${this.title},${this.isbn},${this.authors},${this.publishedAt}\n`;
        try {
            fs.appendFileSync("./Magazines.csv", csv);
        } catch (err) {
            console.error(err);
        }
    }
}

const app = express();
app.use(express.json());

let json = csvToJson.getJsonFromCsv("Authors.csv");
const authors = [];
for(let i=0; i<json.length;i++){
    authors.push(json[i]);
}
json =csvToJson.getJsonFromCsv("Books.csv");
const booksAndMagazines = [];
for(let i=0; i<json.length;i++){
    booksAndMagazines.push(json[i]);
}
json = csvToJson.getJsonFromCsv("Magazines.csv");
for(let i=0; i<json.length;i++){
    booksAndMagazines.push(json[i]);
}


app.get('/',(req,res)=>{
    res.json('Welcome to my website!');
})

app.get('/view',(req,res)=>{
    res.json(booksAndMagazines);
})

app.get('/find/isbn/:ISBN',(req,res)=>{
    const ISBN = req.params.ISBN;
    const found = booksAndMagazines.find(book=>book.isbn===ISBN);
    
    if(found)
        res.json(found);
    else
        res.send("Given ISBN is invalid.");
})

app.get('/find/email/:email',(req,res)=>{
    const authorsEmail = req.params.email;
    const result = booksAndMagazines.filter(book=>book.authors===("null-"+authorsEmail));

    if(result)
        res.json(result);
    else
        res.send(`${authorsEmail} is not present.`);
})

app.get('/view/sortbytitle',(req,res)=>{
    const result = booksAndMagazines.sort((a, b) => a.title > b.title ? 1 : -1);

    res.json(result);
})

app.post('/addBook',(req,res)=>{
    const {title , isbn, authors, description} = req.body;
    
    const book = new Book(title,isbn,authors,description);
    book.saveAsCSV();

    res.send("Book added.");
})

app.post('/addMagazine',(req,res)=>{
    const { title, isbn, authors, publishedAt } = req.body;
    const magazine = new Magazine(title,isbn,authors,publishedAt);
    magazine.saveAsCSV();

    res.send("Magazine added.");
})




app.listen(PORT,()=>console.log(`server running on PORT ${PORT}`));