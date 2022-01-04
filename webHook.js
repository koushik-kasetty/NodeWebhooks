const secret = "ABCabc@123";
const repo = "https://github.com/koushik-kasetty/NodeWebhooks.git";

const http = require('http');
const crypto = require('crypto');
const exec = require('child_process').exec;

http.createServer(function (req, res) {
    console.log("into create server ");
    req.on('data', function(chunk) {
        console.log("into on reqest method ");
        let sig = "sha1=" + crypto.createHmac('sha1', secret).update(chunk.toString()).digest('hex');
        console.log("sigh ,",sig)
        if (req.headers['x-hub-signature'] == sig) {
            console.log("into if condition");
           //execute your jenkins job 
        }
    });

    res.end();
}).listen(8080);
