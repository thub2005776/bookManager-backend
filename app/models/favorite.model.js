const mongoose = require("mongoose");

const favotite = new mongoose.Schema({
    uid: String,
    bid: String,
    title: String,
    img: String,
    author: String,
    favorite: Boolean,
});

const favoriteModel = mongoose.model("favorites", favotite);

module.exports = favoriteModel;