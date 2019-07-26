// https://hackernoon.com/set-up-ssl-in-nodejs-and-express-using-openssl-f2529eab5bb
// 建立 *.pem 及移除密碼方式參 https://gist.github.com/bencentra/909830fb705d5892b9324cffbca3926f
const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');

//GET home route
app.get('/', (req, res) => {
     res.send('Hello World');
});
app.use(express.static(__dirname + '/public'));//设置静态文件目录
// we will pass our 'app' to 'https' server
https.createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
//    passphrase: 'passphrase'
}, app)
.listen(3000);