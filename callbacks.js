const dbClient = require("mongodb").MongoClient;

const homepage = (req, resp) => {
    console.log(req.body);

    resp.redirect("sign_in.html");
    resp.end();
};

const signIn = async (req, resp) => {
    var map = req.body;
    console.log(req.body);
    dbClient.connect("mongodb://localhost:27017/", async (error, dbI) => {
        if (error) {
            console.log(error);
            resp.send("signIn error");
        }

        var isSigenedIn =
            (await dbI
                .db("bkim")
                .collection("post")
                .find({ email: map.email })
                .count()) > 0;
        if (isSigenedIn === true) {
            resp.send("user with the entered email already exists");
            return;
        }

        var db = dbI.db("bkim");
        const isSaved = await db.collection("post").insertOne(map);
        resp.send("success");
        resp.end();
        console.log(isSaved);
        console.log("saved");
    });
};

const logIn = async (req, resp) => {
    var map = req.body;
    console.log(map.email);

    dbClient.connect("mongodb://localhost:27017/", async (error, dbI) => {
        var person = await dbI
            .db("bkim")
            .collection("post")
            .findOne({ email: map.email });

        console.log(person);
        if (person === null) {
            resp.send(
                "wrong email or password"
            );
            return;
        }

        var pswd = person.pswd;
        console.log(pswd);

        if (error) console.log(error);
        if (pswd !== map.pswd) {
            resp.send("wrong password");
            return;
        }
        resp.send("sccss");

    });
};

const uploadText = (req, resp) => {
    var map = req.body;
    console.log(map)
    var dateOfPost = new Date().toLocaleString();
    var obj = {
        title: map.title,
        post: map.info,
        name: map.name,
        date: dateOfPost,
    };
    dbClient.connect("mongodb://localhost:27017/", async (error, dbI) => {
        if (error) console.log(error);
        var db = dbI.db("posts");
        await db.collection("messeges").insertOne(obj);

        console.log("saved");
    });

    resp.send("uploaded");
    resp.end();
};


const uploadImage = (req, resp) => {
    var map = req.body;
    console.log(map)
    var dateOfPost = new Date().toLocaleString();
    var obj = {
        title: map.title,
        post: map.info,
        name: map.name,
        date: dateOfPost,
    };
    dbClient.connect("mongodb://localhost:27017/", async (error, dbI) => {
        if (error) console.log(error);
        var db = dbI.db("posts");
        await db.collection("messeges").insertOne(obj);

        console.log("saved");
    });

    resp.send("uploaded");
    resp.end();
};

const uploadVideo = (req, resp) => {
    var map = req.body;
    console.log(map)
    var dateOfPost = new Date().toLocaleString();
    var obj = {
        title: map.title,
        post: map.info,
        name: map.name,
        date: dateOfPost,
    };
    dbClient.connect("mongodb://localhost:27017/", async (error, dbI) => {
        if (error) console.log(error);
        var db = dbI.db("posts");
        await db.collection("messeges").insertOne(obj);

        console.log("saved");
    });

    resp.send("uploaded");
    resp.end();
};





const getInfo = (req, resp) => {
    map = req.body
    console.log(map);

    dbClient.connect("mongodb://localhost:27017/", (error, dbI) => {
        if (error) console.log(error);
        var dbForPosts = dbI.db("posts");
        // var postedBy = dbI.db("bkim").collection('posts').findOne({ email: map.email }).name;
        // console.log(postedBy)
        // if (postedBy == null || postedBy == undefined) {
        //     resp.send('unauthorised access! Sign in first to access this data.')
        //     return
        // }
        dbForPosts.collection("items")
            .find({}).toArray(async (error, result) => {
                if (error) {
                    console.log(error);
                }
                await resp.json(result.reverse());
                await resp.end();
            });
    });
}

const listen = () => {
    console.log(`server listening on port: ${require('./port.js').c110}`);
};

module.exports = {
    homepage,
    uploadText,
    uploadImage,
    uploadVideo,
    getInfo,
    listen,
    logIn,
    signIn,
};