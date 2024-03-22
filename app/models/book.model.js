const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: String,
    categorite: String,
    author: String,
    quantity: Number,
    stored: Number
});

const BookModel = mongoose.model("books", BookSchema);

module.exports = BookModel;