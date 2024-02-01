const users =require('../db/models/users');
const mongoose=require('mongoose');
const { error_function, success_function } = require('../utils/response-handler');


exports.createUser=async function (req,res){
    try{
        const datas=req.body;

        //validate

        const isUserExist =await users.findOne({email:datas.email});
        console.log("isUserExist : ",isUserExist);

        if(isUserExist){
            let response=error_function({
                statusCode:400,
                message:"user already exist",
            })
            res.status(response.statusCode).send(response);
           
        }

        const new_user = await users.create(datas);
        if (new_user) {
            let response = success_function({
                statusCode: 201,
                data: new_user,
                message: "success",
            })
            res.status(response.statusCode).send(response.message);
            return;
        } else {
            res.status(400).send("failed");
            return;
        } 
        
       
    }catch(error){
        let response=error_function({
            statusCode:400,
            message:"user creation failed",
        })
        res.status(response.statusCode).send(response)
    }
}

exports.getUserData=async function (req,res){
    
    
        try {
            
            const usersList = await users.find();
    
            if (usersList.length > 0) {
                res.status(200).send(usersList);
            } else {
                res.status(404).send("No users found");
            }
        } catch (error) {
            console.error("Error fetching users:", error);
            res.status(500).send("Data not Found");
        }
    }
    

  
    
    

exports.updateUser=async function (req,res){
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

    const isUserExist =await users.findOne({email:data.email});
    console.log("isUserExist : ",isUserExist);

    if(isUserExist){
        let response=error_function({
            statusCode:400,
            message:"user already exist",
        })
        res.status(response.statusCode).send(response);
        return;
    }
    await users.updateOne({ _id }, { $set: updateDatas })
        .then((message) => {
            console.log("Document updated successfully : ", message);
            res.status(200).send("Document updated successfully");
        })
        .catch((error) => {
            console.log("Document not updated : ", error);
            res.status(400).send("failed");
        })
    
}
exports.deleteUser= async function (req,res){
    let data = req.body;
    console.log("data", data);

    let id = data;
    console.log("id : ", id);

    let _id =new mongoose.Types.ObjectId(id);
    console.log("_id : ", _id);


   users.findByIdAndDelete(_id)
   .then((message)=>{
    console.log("deleted successfully");
    res.status(200).send("success");
   })
   .catch((error)=>{
    console.log("deleted successfully");
    res.status(200).send("failed");
   })
}



   