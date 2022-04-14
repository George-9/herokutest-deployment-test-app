const express = require('express'), 
      cors = require('cors')(),
      mongoClient = require('mongodb').MongoClient

const port = process.env.PORT ||  8000


const app = express()

app.use(express.static(__dirname))
app.use(express.urlencoded({extended: true, limit: '50mbs'}))
app.use(cors)

app.get('/',function(req, resp){
      resp.send('hello User');
      resp.end()
})

app.listen(port,()=>{
      console.log('server running')
})