const express = require('express');
const app = express();
const axios = require("axios")
const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());
app.use(express.urlencoded({extended:true}))

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello world!');
});

baseRouter.post('/add', (req, res) => {
    res.json({ result: req.body.first+req.body.second  });
});


baseRouter.post('/subtract', (req, res) => {
    res.json({ result: req.body.first-req.body.second  });

});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});