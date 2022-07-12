import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Book = new Schema({
    Title: { type: String },
    Author: { type: String },
    Description: { type: String },
    Cover: { type: String },
    URL: { type: String },
    linkToBuy: { type: String },
    NYPL_Link: { type: String },
  });

  export default mongoose.model("books", Book);