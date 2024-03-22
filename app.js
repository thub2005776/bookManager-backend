const express = require('express');
const cors = require('cors');
const ApiError = require('./app/api-error');

const { UserRouter, BookRouter } = require('./app/routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', UserRouter);

app.use('/books', BookRouter);

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

app.use((req, res, next) => {
    return next(new ApiError(500, "Internal Server Error"));
});

module.exports = app;