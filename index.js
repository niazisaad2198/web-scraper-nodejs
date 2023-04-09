const port = 8000;
require("dotenv").config();

const axios = require("axios");
const express = require("express");
//const cheerio = require("cheerio");
//const axios = require("axios");

const app = express();

const url = process.env.URL;

axios(url)
  .then((res) => {
    const html = res.data;
    console.log(html);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
