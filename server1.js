const express = require('express');
const app = express();
const dotenv = require('dotenv');
let { MongoClient, ObjectId} = require('mongodb');
dotenv.config();
let port = process.env.PORT;

const client = new MongoClient('mongodb://localhost:27017')
const db = client.db("todo");
const collection = db.collection("todo_coll");

console.log("__dirname", __dirname);
app.use('/', express.static(__dirname + "/todolist"));
app.use(express.urlencoded({ extended: false }));//to parse form data
app.use(express.json());//to parse json data
app.use(express.text());

app.post('/submit', async (req, res) => {
    let data = req.body;
    console.log("datas :", data);

    const isUserExist =await collection.findOne({name:data.name});
        console.log("isUserExist : ",isUserExist);

        if(isUserExist){
            res.status(400).send("user already exists");
            return;
        }


    await collection.insertOne(data)
        .then((message) => {
            console.log("Document submited successfully");
            res.status(201).send("success");
        })
        .catch((error) => {
            console.log("Document insertion failed");
            res.status(400).send("failed")
        })

})

app.get('/getData', async (req, res) => {
    let data = await collection.find().toArray();
    console.log("data : ", data);

    let json_data = JSON.stringify(data);
    console.log("jsondata : ", json_data);
    res.status(200).send(json_data);
})
app.put('/editData', async (req, res) => {
    let data = req.body;
    console.log("data", data);


    let id = data.id;
    console.log("id : ", id);

    let _id = new ObjectId(id);
    console.log("_id : ", _id);

    let updateDatas = {
        name: data.name,
        
    }

    const isUserExist =await collection.findOne({name:data.name});
    console.log("isUserExist : ",isUserExist);

    if(isUserExist){
        res.status(400).send("useralready exists");
        return;
        
    }
    await collection.updateOne({ _id }, { $set: updateDatas })
        .then((message) => {
            console.log("Document updated successfully : ", message);
            res.status(200).send("Document updated successfully");
        })
        .catch((error) => {
            console.log("Document not updated : ", error);
            res.status(400).send("failed");
        })
})

app.delete('/deleteData',async(req,res)=>{
    let data = req.body;
    console.log("body", data);


    let id = data;
    console.log("id : ", id);

    let _id = new ObjectId(id);
    console.log("_id : ", _id);

    await collection.deleteOne({_id})
    .then((message)=>{
      console.log("deletion successful : ",message);
      res.status(200).send("success");
    })
    .catch((error)=>{
      console.log("deletion failed : ",error);
      res.status(400).send("failed");
    })
})




async function connect() {
    await client.connect()
        .then((message) => {
            console.log("database connection established", message);
        })
        .catch((error) => {
            console.log("Database connection error : ", error);
        })
        .finally(() => {
            app.listen(port, () => {
                console.log(`server running at http://127.0.0.1:${port}`)

            });
        })
}
connect();