const express = require('express');
const mongoose = require('mongoose');
const db = 'mongodb://localhost:27017/unitest';

const routes = require('./route/postroute');

const server = express();
server.use(express.json());

server.use('/api', routes);

mongoose.connect((db), {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
})
    .then(() => console.log("connected to mongoDB", db))
    .catch(err => console.log("error mongodb", err));

module.exports = server;
