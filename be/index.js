const express = require('express');
const cors = require('cors');
const https = require('https');
const app = express();
const port = 3000;

const articles = [];

const corsOptions = {
    origin: 'http://localhost:4200',
    optionSuccessStatus: 200
};

app.use(server);

app.get('/top-atricles', cors(corsOptions), (req, res) => {
    res.send();
});

app.listen(port, () => {
    console.log('Server started!');
});
