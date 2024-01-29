const express = require('express');
const app =express();
const dotenv=require('dotenv');
dotenv.config();
const connect=require('./db/config');
const userRoutes=require('./routes/userRoutes');

app.use('/test',(req,res)=>{
    res.status(200).send("success");
})
console.log("__dirname", __dirname);
app.use('/', express.static(__dirname + "/client"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.text());
app.use(userRoutes);
//Database Connection
connect();
app.listen(process.env.PORT,()=>{
    console.log(`server listening at http://192.168.150.76:${process.env.PORT}`);
});