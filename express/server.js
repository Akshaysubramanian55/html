const express = require('express');
const app = express();
const dotenv=require('dotenv');
dotenv.config();
let port=process.env.PORT;


app.get('/test',(req,res)=>{
    res.status(200).send("success");
});

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
})