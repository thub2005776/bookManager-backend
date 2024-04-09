const mongoose = require("mongoose");

const BorrowdBook = new mongoose.Schema({
    uid: String,
    bid: String,
    title: String,
    img: String,
    quantity: Number,
    borrowDate: Date,
    returnDate: Date,
    returned: Boolean,
});

const BookModel = mongoose.model("borrowedBooks", BorrowdBook);

module.exports = BookModel;