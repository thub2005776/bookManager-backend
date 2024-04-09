const UserRouter = require('./user.route');
const BookRouter = require('./book.route');
const LoginRouter = require('./login.route');
const FileRouter = require('./file.route');
const BorrowedBookRouter = require('./borrowedBook.route'); 
const CategoryRouter = require('./category.route');
const FavoritesRouter = require('./favorite.route');

module.exports = {
    UserRouter,
    BookRouter,
    LoginRouter,
    FileRouter,
    BorrowedBookRouter,
    CategoryRouter,
    FavoritesRouter,
};