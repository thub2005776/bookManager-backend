const mongoose = require("mongoose");

const BorrowdBook = new mongoose.Schema({
    uid: String,
    bid: String,
    quantity: Number,
    borrowDate: Date,
    returnDate: Date, 
});

const BookModel = mongoose.model("borrowedBooks", BorrowdBook);

module.exports = BookModel;