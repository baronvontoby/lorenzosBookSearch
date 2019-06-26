const router = require('express').Router();
const db = require('../models');


//  `/api/books` (get) - Should return all saved books as JSON.

router.route('/books')
    .get((req,res,err) => {
        res.json('')
});

//  `/api/books` (post) - Will be used to save a new book to the database.

router.route('/books')
    .post((req,res,err) => {
        res.json('')
});


//  `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.

router.route('/books/:id')
    .delete((req,res,err) => {
        res.json('');
})

module.exports = router;