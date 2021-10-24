// const fs = require('fs');

// fs.mkdirSync("files");
// console.log('Hello');

// fs.writeFileSync("files/file.txt", "Hello And This Is my First Node Js Program");

// fs.appendFileSync("files/file.txt", " and I love Node js");

// fs.unlinkSync("files/file.txt");

// fs.rmdirSync("files")

// fs.mkdir('asyncFiles', (err)=>{
//     console.log("Directory Created");
// })

// fs.writeFile("asyncFiles/text.txt", "Hello World This Is my async File", (err) => {
    
// })

const http = require("http")
const fs   = require("fs");

const d = fs.readFileSync("index.html", "UTF-8");
// d.replace("{%Title%}", )

const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url == "/")
    {
        res.end("Hello From Home Page")
    }
    else if(req.url == "/contact")
    {
        res.end("Hello From Contact Page")
    }
    else
    {
        res.end("404 Page Not Found")
    }
        
});

server.listen(8000, "127.0.0.1", () =>  {
    console.log("Hello Server Listen to your port number")
})

