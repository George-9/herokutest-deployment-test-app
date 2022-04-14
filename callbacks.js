const { MongoClient } = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";

const homepage = (req, resp) => {
    console.log(req.body);

    resp.send("sign_in.html");
    resp.end();
};


const signIn = async (req, resp) => {
   

    var map = req.body;
    console.log(req.body);
  
};

// const logIn = async (req, resp) => {
//     var map = req.body;
//     console.log(map.email);

//     MongoClient.connect(url, async (error, dbI) => {
//         var person = dbI
//             .db("bkim")
//             .collection("post")
//             .findOne({ email: map.email });

//         console.log(person);
        
//     });
// };

// const uploadText = (req, resp) => {
//     var map = req.body;
//     console.log(map)
//     var dateOfPost = new Date().toLocaleString();
//     var obj = {
//         title: map.title,
//         post: map.info,
//         name: map.name,
//         date: dateOfPost,
//     };
//     client.connect( async (error, dbI) => {
//         if (error) console.log(error);
//         var db = dbI.db("posts");
//         await db.collection("messeges").insertOne(obj);

//         console.log("saved");
//     });

//     resp.send("uploaded");
//     resp.end();
// };


// const uploadImage = (req, resp) => {
//     var map = req.body;
//     console.log(map)
//     var dateOfPost = new Date().toLocaleString();
//     var obj = {
//         title: map.title,
//         post: map.info,
//         name: map.name,
//         date: dateOfPost,
//     };
//     client.connect( async (error, dbI) => {
//         if (error) console.log(error);
//         var db = dbI.db("posts");
//         await db.collection("messeges").insertOne(obj);

//         console.log("saved");
//     });

//     resp.send("uploaded");
//     resp.end();
// };

// const uploadVideo = (req, resp) => {
//     var map = req.body;
//     console.log(map)
//     var dateOfPost = new Date().toLocaleString();
//     var obj = {
//         title: map.title,
//         post: map.info,
//         name: map.name,
//         date: dateOfPost,
//     };
//    client.connect(async (error, dbI) => {
//         if (error) console.log(error);
//         var db = dbI.db("posts");
//         await db.collection("messeges").insertOne(obj);

//         console.log("saved");
//     });

//     resp.send("uploaded");
//     resp.end();
// };





// const getInfo = (req, resp) => {
//     map = req.body
//     console.log(map);

//     client.connect((error, dbI) => {
//         if (error) console.log(error);
//         var dbForPosts = dbI.db("posts");
//         // var postedBy = dbI.db("bkim").collection('posts').findOne({ email: map.email }).name;
//         // console.log(postedBy)
//         // if (postedBy == null || postedBy == undefined) {
//         //     resp.send('unauthorised access! Sign in first to access this data.')
//         //     return
//         // }
//         dbForPosts.collection("items")
//             .find({}).toArray(async (error, result) => {
//                 if (error) {
//                     console.log(error);
//                 }
//                 await resp.json(result.reverse());
//                 await resp.end();
//             });
//     });
// }

const listen = () => {
    console.log(`server listening on port: ${require('./port.js').c110}`);
};

module.exports = {
    homepage,
    // uploadText,
    // uploadImage,
    // uploadVideo,
    // getInfo,
    listen,
    // logIn,
    signIn,
};