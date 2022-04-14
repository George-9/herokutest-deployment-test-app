var app = require("./express").app;

const homepage = require("./callbacks").homepage;
// const uploadText = require("./callbacks").uploadText;
// const getInfo = require("./callbacks").getInfo;
const listen = require("./callbacks").listen;
// const signIn = require("./callbacks").signIn;
// const logIn = require("./callbacks").logIn;

const port = require("./port.js").c110;

//homepage
app.get("/", homepage);




app.listen(port, listen(port));