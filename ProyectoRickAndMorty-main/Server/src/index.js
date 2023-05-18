const http = require('http');

http.createServer((req,res) =>{
     
    res.setHeader('Access-Control-Allow-Origin', '*')

    const {url} = req;
    console.log(url);

    // if(url.includes(rickandmorty/characters)){
    //     url.split("/").at(-1)       
    // }

    //res.writeHead(200, {"Content-Type": "text/plain"});
    //res.end("Holis!!")
    //res.write
})
.listen(3001,"localhost")