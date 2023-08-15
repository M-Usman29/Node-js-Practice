const http = require("http");
const fs =require('fs');

const port= process.env.PORT || 3000;

const server= http.createServer((req,res)=>{

    res.statusCode=200;
    res.setHeader('Content-Type','Text/html')
    console.log(req.url)
    if (req.url=='/'){
        res.statusCode=200;
        const data= fs.readFileSync("index.html");
        res.end(data.toString())
    }

});


server.listen(port,()=>{
    console.log('Server is lstening on port ',port);
})