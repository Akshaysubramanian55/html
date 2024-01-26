const users =require('./db/models/models/users');


async function createUser(req,res){
    try{
        const datas=req.body;
        const new_user=await users.create(datas);
        
        if(new_user){
            res.status(201).send("success");
            return;
        }else{
            res.status(400).send("failed");
            return;
        }
    }catch(error){
        console.log("error",error);
        res.status(400).send("failed")
    }
}

async function getUserData(){

}
async function updateUser(){

}
async function deleteUser(){

}


module.exports={
    createUser,
    getUserData,
    updateUser,
    deleteUser
}