# API Reference

- [API Reference](#api-reference)
  - [Get All CSV Data](#get-all-csv-data)
  - [Find book or magazine by ISBN](#find-book-or-magazine-by-isbn)
---------------------------


## Get All CSV Data
```http
  GET /view
```

| Request | Access    | Description                |
| :-------- | :------- | :------------------------- |
| `GET`| Public| Get all csv data|
## Find book or magazine by ISBN
```http
 GET  /find/isbn/:ISBN
```

| Request | Access    | Description                |
| :-------- | :------- | :------------------------- |
| `GET`| Public| Find a book or magazine by its ISBN|

- ## Find book or magazine by author's email
```http
  GET /find/email/:email
```

| Request | Access    | Description                |
| :-------- | :------- | :------------------------- |
| `GET`| Public| Find all books and magazines by their authors’ email|

- ## Sort by Title
```http
  POST /view/sortbytitle
```

| Request | Access    | Description                |
| :-------- | :------- | :------------------------- |
| `GET`| Public| Print out all books and magazines with all their details sorted by title|
- ## Add a book or magazine
```http
  PUT /addBook
```

| Request | Access    | Params| Description                |
| :-------- | :------- |:-----| :------------------------- |
| `POST`| Public|Add a book to csv file|
```http
  PUT /addMagazine
```

| Request | Access    | Params| Description                |
| :-------- | :------- |:-----| :------------------------- |
| `POST`| Public|Add a magazine to csv file|