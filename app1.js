const express =require('express');
const app= express();
const mongoose=require('mongoose');
const dotenv =require('dotenv');
const fs = require('fs');
const path = require('path');

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
  image:{
    type:String,
    required:true,
  }
})



//compiling scema to model

const model=mongoose.model("users",schema);


app.post('/submit', async (req, res) => {
  let { name, email, password, base64Image } = req.body;

  // Check if all required fields are present
  if (!name || !email || !password || !base64Image) {
      return res.status(400).send("All fields are required");
  }

  // Check if the user already exists
  const isUserExist = await model.findOne({ email: email });
  if (isUserExist) {
      return res.status(400).send("User already exists");
  }

  // Save the image to the server's file system
  const uploadDir = path.join(__dirname, 'uploads');
  if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
  }

  // Convert base64 string to buffer
  const imageBuffer = Buffer.from(base64Image, 'base64');

  // Generate a unique filename (you may use a different approach)
  const fileName = `${Date.now()}.png`;

  // Write buffer to file
  const filePath = path.join(uploadDir, fileName);
  fs.writeFileSync(filePath, imageBuffer);

  // Save user data (including image path) to MongoDB
  try {
      await model.create({
          name: name,
          email: email,
          password: password,
          image: filePath // Save the file path to the image in the database
      });
      console.log("Document inserted successfully");
      res.status(201).send("Success");
  } catch (error) {
      console.error("Document insertion failed:", error);
      res.status(400).send("Failed to insert document");
  }
});



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

  const isUserExist =await model.findOne({email:data.name});
    console.log("isUserExist : ",isUserExist);

    if(isUserExist){
        res.status(400).send("useralready exists");
        return;
        
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

