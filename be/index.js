const express = require('express');
const cors = require('cors');
const got = require('got');
const http = require('http');
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const port = 3000;

const url = 'https://gnews.io/api/v4';
const token = '6d06c7544782d05ad102766a61efafda';
const dbUrl = 'mongodb://localhost:27017/article-search-be';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db live');
});

const clicksSchema = new mongoose.Schema({clickData: Object});
const searchSchema = new mongoose.Schema({search: String});
const ClickModel = mongoose.model('ClickModel', clicksSchema);
const SearchModel = mongoose.model('SearchModel', searchSchema);

app.use(cors());
app.use("/", router);

router.post('/clicks', async (req, res) => {
  const newClick = new ClickModel({ clickData: req.body });
  newClick.save(function (err, newClick) {
    if (err) return console.error(err);
  });
});

app.get('/search/:search', async (req, res) => {
  const resp = await got.get(`${url}/search?q=${req.params.search}&max=9&lang=en&token=${token}`);
  const newSearch = new SearchModel({ search: req.params.search });
  newSearch.save(function (err, newSearch) {
    if (err) return console.error(err);
  });
  res.status(200).json(resp.body);
});

app.get('/top', async (req, res) => {
  const resp = await got.get(`${url}/top-headlines?&max=9&lang=en&token=${token}`);
  res.status(200).json(resp.body);
});

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
});
