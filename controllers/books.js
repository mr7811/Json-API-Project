import Book from "../models/novel.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (book) {
      return res.json(book);
    }
    res.status(404).json({ message: "Book not found!" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createBook = async (req, res) => {
  try {
    const book = new book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const book = await book.findByIdAndUpdate(id, req.body);
  res.status(200).json(book);
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Book.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Book deleted");
    }
    throw new Error("Book not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};