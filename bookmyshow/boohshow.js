const express = require('express');
const app = express();
const dotenv = require('dotenv');
const multer = require('multer');
const mongoose=require('mongoose');
const path = require('path');
const error=require('mongoose/lib/error');
dotenv.config();

port=process.env.PORT;


app.use(express.static(__dirname+"/bookmyshowclient"));
app.use(express.static(path.join(__dirname, 'image')));

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.text());


//schema
let schema =new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  genre:{
    type:String,
    required:true,
   
  },
  director:{
    type:String,
    required:true,
  },
})



//compiling scema to model

const model=mongoose.model("cinema",schema);

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/submit',async(req,res)=>{
    let data=req.body;
    console.log("data: ",data);

    //save to database

    const isUserExist =await model.findOne({title:data.title});
        console.log("isUserExist : ",isUserExist);

        if(isUserExist){
            res.status(400).send("user already exists");
            return;
        }

        const result = await model.insertOne({
            title: req.body.title,
            genre:req.body.genre,
            director:req.body.director,
            image: req.file.buffer.toString('base64')
        })
    .then((message)=>{
     console.log("Document inserted successfully");
     res.status(201).send("success");
    })
    .catch((error)=>{
        console.log("Document insertion failed");
        res.status(400).send("failed");
    })

})

app.get('/getMovies',async(req,res)=>{


  
    const users = await model.find();
    res.status(200).send(users);

});


async function connection() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/ums");
        console.log("Database connection established");
    } catch (error) {
        console.log("Database Not Connected");
    }finally{
        app.listen(port,()=>{
            console.log(`server running at http://localhost:${port}`)
        })
    }
}
connection();
