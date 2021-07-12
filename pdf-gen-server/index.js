const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

const pdfTemplate = require('./documents');

const app = express();

const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//post - pdf generation and fetching of the data

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body),{}).toFile('result.pdf', (err) => {
        if(err) {
            res.send( Promise.reject());
        }

        res.send( Promise.resolve());
    })
})

//get - send the generated pdf to the client 
app.get('/fetch-pdf', (req,res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})


app.listen(port, () => console.log(`Listening on port ${port}`));