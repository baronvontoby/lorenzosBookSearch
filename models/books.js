var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: String,
    authors: String,
    description: String,
    imageUrl: String,
    linkUrl: String
})

var Book = mongoose.model("Book", BookSchema);

module.exports = Book;