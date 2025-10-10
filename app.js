import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';

import crypto from 'crypto';
import bcrypt from 'bcrypt';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import authMiddleware from "./middleware/basic-auth.js";

const app = express();

// Load env vars
dotenv.config();

// view engine setup
app.set('views', path.resolve( 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.resolve('public')));

// Basic Auth Middleware
app.use(authMiddleware)

// Example of using crypto to create an MD5 hash
// const hash = crypto.createHash('md5').update('some_string').digest("hex")

// Test bcrypt hashing
const saltRounds = 10;
const myPlaintextPassword = 'password';
const someOtherPlaintextPassword = 'not_bacon';

try {
    // Generate hash using promise-based API
    console.time('bcrypt hash time');
    let hashedPassword = await bcrypt.hash(myPlaintextPassword, saltRounds);
    console.log(1);
    console.log('hash', hashedPassword);
    console.timeEnd('bcrypt hash time');

    // Load hash from your password DB and compare
    const result1 = await bcrypt.compare(myPlaintextPassword, hashedPassword);
    console.log(2);
    console.log(result1);

    const result2 = await bcrypt.compare(someOtherPlaintextPassword, hashedPassword);
    console.log(3);
    console.log(result2);
} catch (err) {
    console.error('bcrypt demo error:', err);
}

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


export default app;
