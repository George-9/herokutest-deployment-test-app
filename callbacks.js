const MongoClient = require("mongodb").MongoClient;

var axios = require("axios");

const homepage = (_, resp) => {
  resp.redirect('./homepage/home.html')
};

const getict = (_, resp) => {
  // resp.contentType('application/json');

  var data = JSON.stringify({
    collection: "ict",
    database: "bkict",
    dataSource: "Cluster0",
  });

  var config = {
    method: "post",
    url: "https://data.mongodb-api.com/app/data-fwnxq/endpoint/data/beta/action/find",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key":
        "Ko615ZPA0wwD2CrD6UyudcMFZvlP68u3fa6f3WUZmMETe4rIdO68GsYOixBASa4s",
    },
    data: data,
  };

  axios(config)
    .then(async function (response) {
      var info = await response.data;
      console.log(data);

      resp.status(200).json(info);
    })
    .catch(function (error) {
      console.log(error);
    });
};


const getbookshop = (_, resp) => {

  var data = JSON.stringify({
    collection: "library_data",
    database: "bkict",
    dataSource: "Cluster0",
  });

  var config = {
    method: "post",
    url: "https://data.mongodb-api.com/app/data-fwnxq/endpoint/data/beta/action/find",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key":
        "Ko615ZPA0wwD2CrD6UyudcMFZvlP68u3fa6f3WUZmMETe4rIdO68GsYOixBASa4s",
    },
    data: data,
  };

  axios(config)
    .then(async function (response) {
      var info = await response.data;
      console.log(data);

      resp.status(200).json(info);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const listen = () => {
  console.log(`server listening on port: ${require("./port.js").c110}`);
};

module.exports = {
  homepage,
  listen,
  getict,
  getbookshop,
};
