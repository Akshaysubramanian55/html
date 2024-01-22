async function getuserdata(){
    let userData = await fetch ('/getData');
    console.log("userData : ",userData);
    
    let parsedUserData = await userData.json();
    console.log("parseruserData : ",parsedUserData);
 
    let tasklist =document.getElementById('tasklist');
    let content='';
 
    for(let i=0;i<parsedUserData.length;i++){
        content= content + `
        <ul>
        <li><input type="text" name="addtask" id=addtask-${parsedUserData[i]._id}" value="${parsedUserData[i].name}" disabled="true">
        <button onclick="handleEdit('${parsedUserData[i]._id}')">Edit</button>
        <button onclick="handleSave('${parsedUserData[i]._id}')">Save</button>
        <button onclick="handleDelete('${parsedUserData[i]._id}')">Delete</button>
        </li>
        </ul>
        `
    }
    tasklist.innerHTML=content;
}
getuserdata();

function handleEdit(id){
 
    let _id=id;
    console.log("id : ",_id);
 
    let name=document.getElementById(`addtask-${_id}`);
    console.log("name : ",name);
    name.disabled=false;
} 
async function handleSave(id){
   

    let name=document.getElementById(`name-${id}`).value;
    console.log("edit : ",name);
 
    let email=document.getElementById(`email-${id}`).value;
    console.log("email : ",email);
 
    let password=document.getElementById(`password-${id}`).value;
    console.log("password : ",password);
 
    let data ={
       id,
       name,
       
    }
 
    let json_data= JSON.stringify(data);
 
    await fetch('editData',{
       "method":"PUT",
       "headers":{
          "content-Type":"application/json"
       },
       "body":json_data
    });
    let parsed_response = await response.text();
   console.log("parsed_response : ",parsed_response);

   if(parsed_response ==="Document updated successfully"){
      alert("saved");
   }else{
      alert("failed");
   }
 }

 async function handleDelete(id){
    console.log("id : ",id);
 
    let response = await fetch('/deleteData',{
       "method":"DELETE",
       "header":{
          "Content-Type":"application/plain"
       },
       "body":id,
    });
    console.log("response: ",response);
    let parsed_response = await response.text();
    console.log("parsed_response : ",parsed_response);
 
    if(parsed_response ==="success"){
       alert("success");
    }else{
       alert("failed");
    }
 
 }