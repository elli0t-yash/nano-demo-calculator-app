const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello World!');
});

baseRouter.post('/add', (req, res) => {
    const firstNum = req.body.first;
    const secondNum = req.body.second;

    const result = firstNum + secondNum;
    res.json({ "result": result });
});


baseRouter.post('/subtract', (req, res) => {
    const firstNum = req.body.first;
    const secondNum = req.body.second;

    const result = firstNum - secondNum;
    res.json({ "result": result });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});