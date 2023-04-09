const port = 8000;

const express = require("express");
//const cheerio = require("cheerio");
//const axios = require("axios");

const app = express();

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
