const express = require('express');
const cors = require('cors');
const got = require('got');
const http = require('http');
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/article-search-be', {useNewUrlParser: true, useUnifiedTopology: true});
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
  const resp = await got.get(`https://gnews.io/api/v4/search?q=${req.params.search}&max=9&lang=en&token=6d06c7544782d05ad102766a61efafda`);
  const newSearch = new SearchModel({ search: req.params.search });
  newSearch.save(function (err, newSearch) {
    if (err) return console.error(err);
  });
  res.status(200).json(resp.body);
});

app.get('/top', async (req, res) => {
  const resp = await got.get('https://gnews.io/api/v4/top-headlines?&max=9&lang=en&token=6d06c7544782d05ad102766a61efafda');
  res.status(200).json(resp.body);
});


app.post('/', (req, res) => {
  res.send('Hello World!')
});


const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
});

// const clicksSchema = new mongoose.Schema({
//   clickData: {
//     content: String,
//     description: String,
//     image: String,
//     publishedAt: String,
//     source: {
//       name: String,
//       url: String,
//     },
//     title: String,
//     url: String
//   }
// });
