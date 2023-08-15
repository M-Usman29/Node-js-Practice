const http = require("http");

const port= process.env.port;

const server= http.createServer((rq,res)=>{

    res.statusCode=200;
});