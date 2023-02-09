# [Backend API](https://nodejs-assignment-wz70.onrender.com)

## To Run Locally
```
  git clone https://github.com/shruti1421/assignment-1
  cd /assignment-1
  npm install
  npm start
```
- API will start running on localhost:3000

# API Reference

- [API Reference](#api-reference)
  - [Get All CSV Data](#get-all-csv-data)
  - [Find book or magazine by ISBN](#find-book-or-magazine-by-isbn)
  - [Find book or magazine by authors email](#find-book-or-magazine-by-authors-email)
  - [Sort by Title](#sort-by-title)
  - [Add book or magazine](#add-book-or-magazine)
---------------------------


## Get All CSV Data
[demo](https://nodejs-assignment-wz70.onrender.com/view)
```http
  GET /view
```

| Request | Access    | Description                |
| :-------- | :------- | :------------------------- |
| `GET`| Public| Get all csv data|
## Find book or magazine by ISBN 
[demo](https://nodejs-assignment-wz70.onrender.com/find/isbn/2365-5632-7854)
```http
 GET  /find/isbn/:ISBN  
```

| Request | Access    | Description                |
| :-------- | :------- | :------------------------- |
| `GET`| Public| Find a book or magazine by its ISBN|

## Find book or magazine by authors email 
[demo](https://nodejs-assignment-wz70.onrender.com/find/email/lieblich@echocat.org,null-walter@echocat.org)
```http
  GET /find/email/:email 
```

| Request | Access    | Description                |
| :-------- | :------- | :------------------------- |
| `GET`| Public| Find all books and magazines by their authors’ email|

## Sort by Title 
[demo](https://nodejs-assignment-wz70.onrender.com/view/sortbytitle)
```http
  POST /view/sortbytitle
```

| Request | Access    | Description                |
| :-------- | :------- | :------------------------- |
| `GET`| Public| Print out all books and magazines with all their details sorted by title|

## Add book or magazine
```http
  PUT /addBook
```

| Request | Access   | Description                |
| :-------- | :-------| :------------------------- |
| `POST`| Public|Add a book to csv file|
```http
  PUT /addMagazine
```

| Request | Access    | Description                |
| :-------- | :------- | :------------------------- |
| `POST`| Public|Add a magazine to csv file|


Give an input file like:

|title|isbn|authors|description|
|:----------:|:-------:|:---:|:----------------:|
|Constantin|1234-5678-92|clangsdon0@hc360.com|Description about the book.|

e.g. :

```json
{
  "title": "Constantin",
  "isbn": "1234-5678-92",
  "authors": "clangsdon0@hc360.com",
  "description": "Description about the book",
}
```


will generate:

~~~
title;isbn;authors;description;
Constantin;1234-5678-92;clangsdon0@hc360.com;Description about the book.
~~~

