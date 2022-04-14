import { createServer } from "http";

createServer(function(req, resp){
    console.log(req.body);
    resp.end('recieved')
})

//.listen(8080, ()=> console.log("server running"))

