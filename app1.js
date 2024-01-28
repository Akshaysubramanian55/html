const express =require('express');
const app= express();
const mongoose=require('mongoose');
const dotenv =require('dotenv');
const error=require('mongoose/lib/error');
dotenv.config();
port=process.env.PORT;


app.use(express.static(__dirname+"/client"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.text());


//schema
let schema =new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
  },
})



//compiling scema to model

const model=mongoose.model("users",schema);


app.post('/submit',async(req,res)=>{
    let data=req.body;
    console.log("data: ",data);

    //save to database

    await model.create(data)
    .then((message)=>{
     console.log("Document inserted successfully");
     res.status(201).send("success");
    })
    .catch((error)=>{
        console.log("Document insertion failed");
        res.status(400).send("failed");
    })

})

app.get('/getData',async(req,res)=>{


  
    const users = await model.find();
    res.status(200).send(users);

});


app.put('/editData', async (req, res) => {
  let data = req.body;
  console.log("data", data);
  let id = data.id;
  console.log("id : ", id);

  let _id = new mongoose.Types.ObjectId(id);
  console.log("_id : ", _id);

  let updateDatas = {
      name: data.name,
      email: data.email,
      password: data.password,
  }
  await model.updateOne({ _id }, { $set: updateDatas })
      .then((message) => {
          console.log("Document updated successfully : ", message);
          res.status(200).send("Document updated successfully");
      })
      .catch((error) => {
          console.log("Document not updated : ", error);
          res.status(400).send("failed");
      })
})


app.delete('/deleteData',(req,res)=>{

  let data = req.body;
    console.log("body", data);

    let id = data;
    console.log("id : ", id);

    let _id =new mongoose.Types.ObjectId(id);
    console.log("_id : ", _id);


   model.findByIdAndDelete(_id)
   .then((message)=>{
    console.log("deleted successfully");
    res.status(200).send("success");
   })
   .catch((error)=>{
    console.log("deleted successfully");
    res.status(200).send("failed");
   })
})





async function connect() {
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
connect();

