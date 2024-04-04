const express = require('express');
const cors = require('cors');
const ApiError = require('./app/api-error');
const cookieParser = require('cookie-parser');

const { UserRouter, BookRouter, LoginRouter, FileRouter, BorrowedBookRouter, CategoryRouter } = require('./app/routes');

const app = express();

app.use(cors({
        origin: ["http://localhost:3001", "http://localhost:3002"],
        methods: ["POST", "GET", "PUT", "PATCH", "DELETE"],
        credentials: true,
        preflightContinue: true,
        optionsSuccessStatus: 200
      }
));
app.use(express.json());

app.use(express.static("./app/assets"));

app.use(cookieParser());

app.use('/api/users', UserRouter);

app.use('/api/books', BookRouter);

app.use('/api/categories', CategoryRouter);

app.use('/api/borrowedBooks', BorrowedBookRouter);

app.use('/api/log/', LoginRouter);

app.use('/api/file', FileRouter);

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

app.use((req, res, next) => {
    return next(new ApiError(500, "Internal Server Error"));
});

module.exports = app;