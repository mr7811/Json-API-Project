import db from "../db/connection.js";
import Book from "../models/novel.js";
import books from "./books.json" assert {type:"json"};

const insertData = async () => {

await db.dropDatabase();

await Book.insertMany(books)

db.close();
};

insertData()