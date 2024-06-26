const UserRouter = require('./user.route');
const BookRouter = require('./book.route');
const LoginRouter = require('./login.route');
const FileRouter = require('./file.route');
const BorrowedBookRouter = require('./borrowedBook.route'); 
const PublisherRouter = require('./publisher.route');
const FavoritesRouter = require('./favorite.route');
const AdminRouter = require('./admin.route');

module.exports = {
    UserRouter,
    BookRouter,
    LoginRouter,
    FileRouter,
    BorrowedBookRouter,
    PublisherRouter,
    FavoritesRouter,
    AdminRouter,
};