const http=require('http');
const url =require('url');
const port =3000;
const fs=require('fs');
const queryString = require('querystring');
const {MongoClient}=require('mongodb');

const server = http.createServer((req,res)=>{
    console.log("url : ",req.url);
    //parse the requested url
    const parsed_url=url.parse(req.url);
    console.log("parsed_url : ",parsed_url);


//serve the  HTML file to the root request
    if (parsed_url.pathname==='/'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.end(fs.readFileSync('../../clientt/client/index.html'));
    }
  // handle form submission on post request to submit
    if( req.method==="POST"&&parsed_url.pathname==="/submit"){
        console.log("Form submitted successfully");
        // res.writeHead(200,{'content-Type': 'text/plain'});
        // res.end("form submitted successfully..");


        let body='';
        //collect the data as it comes in chunks
        req.on('data',(chunk)=>{
            console.log("chunk : ",chunk);
            console.log('chunk.toString(): ',chunk.toString());
            body+=chunk.toString();
            console.log("body : ",body);
        });
       // process the form data on end of the project
        req.on('end',()=>{
            const formData=queryString.parse(body);
            console.log("formData : ",formData);

            console.log("name : ",formData.name);
            console.log("email : ",formData.email);
            console.log("password : ",formData.password);
        });
    }
});

server.listen(port,()=>{
    console.log(`server running at http://127.0.0.1:${port}`)
});