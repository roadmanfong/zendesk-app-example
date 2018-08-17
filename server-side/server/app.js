const fs = require('fs');
const https = require('https');
const bodyParser = require('body-parser')
const privateKey  = fs.readFileSync('key.pem');
const certificate = fs.readFileSync('cert.pem');

const credentials = {key: privateKey, cert: certificate};
const express = require('express');
const app = express();
const PORT = 8888;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => res.send('GET Hello World!'));

app.post('/', (req, res) => {
  console.log(req.query.origin);
  console.log(req.query.app_guid)
  console.log(req.body.token);
  res.send('POST Hello World!');
})


const httpsServer = https.createServer(credentials, app);
httpsServer.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT + '!');
});

