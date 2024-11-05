const express = require('express');

const app = express();

app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// Enable this if you want frontends to have more freedome about how they make requests
// e.g. this is for URL encoded forms

app.get("/", (request, response) => {
    response.json({
        message:"Hello, world!"
    });
});

module.exports = {
    app
}