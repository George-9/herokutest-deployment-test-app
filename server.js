var app = require("./express").app;

const homepage = require("./callbacks").homepage;
// const uploadText = require("./callbacks").uploadText;
// const getInfo = require("./callbacks").getInfo;
const listen = require("./callbacks").listen;
// const signIn = require("./callbacks").signIn;
// const logIn = require("./callbacks").logIn;
const getictdata = require('./callbacks').getict

//getbookshop_data
const getbookshop_data = require('./callbacks').getbookshop


const port = require("./port.js").c110;

//homepage
app.get("/", homepage);

//ict info
app.get('/ict',getictdata)

//bookshopdata
app.get('/bookshop', getbookshop_data)



app.listen(port, listen(port));