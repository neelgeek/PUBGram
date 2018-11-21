require('dotenv').config()
const pubg = require('pubg.js');
const client = new pubg.Client(process.env.PUBG_KEY, 'sea');
const Telegraf = require('telegraf')
const http = require('http');
const bot = new Telegraf(process.env.BOT_key);
var port = process.env.PORT || 8000;
http.createServer(HTTPHandler).listen(port);
console.log("Running on port " + port);




function HTTPHandler(req, res) {
    console.log(req);
}