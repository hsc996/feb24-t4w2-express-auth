// using the {} is pulling from module.exports = {}
const { app } = require("./server.js");

//module.exports = app;
// const app = require()

require("dotenv").config();
// const dotenv = reuiqre('dotenv');
// dotenv.config();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Server is running on http//:localhost:" + PORT);
});



