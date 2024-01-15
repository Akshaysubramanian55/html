const express = require('express');
const app = express();
const dotenv=require('dotenv');
dotenv.config();
let port=process.env.PORT;


app.get('/test',(req,res)=>{
    res.status(200).send("success");
});

console.log("__dirname",__dirname);
app.use('/',express.static(__dirname+"../client"))

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
})