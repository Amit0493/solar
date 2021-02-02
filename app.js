const express = require('express')
const app = express()
const port = 3005;
const path = require('path');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('build'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
    // res.send(" hello from your new server");
})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
    // res.send(" hello from your new server");
})

app.post('/save', (req, res) => {
    console.log(" the request reached here with the credentials", req.body);
    res.json({ "name": "amit" });

})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
