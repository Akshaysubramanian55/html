const users =require('../db/models/users');
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
        const new_user=await users.create(datas);
        
        if(new_user){
            let response=success_function({
                statusCode:201,
                data:new_user,
                message:"user created successfully",
            })
            res.status(response.statusCode).send(response);
            return;
        }else{
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
    async function updateUser(req, res) {
        try {
            const userId = req.params.id;  // Assuming you're passing the user ID through the URL parameters.
            const updatedData = req.body;   // Assuming you're sending updated data in the request body.
    
            // Assuming 'users' is a model or database object that has an 'updateOne' method.
            const result = await users.updateOne({ _id: userId }, { $set: updatedData });
    
            if (result.modifiedCount > 0) {
                res.status(200).send("User updated successfully");
            } else {
                res.status(404).send("User not found or no changes made");
            }
        } catch (error) {
            console.error("Error updating user:", error);
            res.status(500).send("Internal Server Error");
        }
    }
    
}
exports.deleteUser= async function (req,res){

}



   