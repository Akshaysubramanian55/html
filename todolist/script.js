async function getuserdata(){
    let userData = await fetch ('http://127.0.0.1:3000/getData');
    console.log("userData : ",userData);
    
    let parsedUserData = await userData.json();
    console.log("parseruserData : ",parsedUserData);
 
    let tbody =document.getElementById('tbody');
    let content='';
 
    for(let i=0;i<parsedUserData.length;i++){
        content= content + `
      <tr>
      <td>${parsedUserData[i]._id}</td>
      <td><input type="text" name="name" id="name-${parsedUserData[i]._id}" value="${parsedUserData[i].name}" disabled="true"></td>
      <td><button onclick="handleEdit()" >Pending</button></td>
      <td><button onclick="handleEdit('${parsedUserData[i]._id}')">Edit</button></td>
      <td><button onclick="handleSave('${parsedUserData[i]._id}')">Save</button></td>
      <td><button onclick="handleDelete('${parsedUserData[i]._id}')">Delete</button></td>
      </tr>
       `
       
    }
    console.log("content : ",content);
    tbody.innerHTML=content;
}
 
 getuserdata();

 function handlestatus(){
   document.getElementById("tbody").innerHTML = "completed";
}


function handleEdit(id){

  let _id=id;
  console.log("id : ",_id);

  let name=document.getElementById(`name-${_id}`);
  console.log("name : ",name);
  name.disabled=false;
  
}

async function handleSave(id){
  

  let name=document.getElementById(`name-${id}`).value;
     console.log("edit : ",name);
     let data ={
        id,
        name,
     }
     let json_data= JSON.stringify(data);

  await fetch('http://127.0.0.1:3000/editData',{
     "method":"PUT",
     "headers":{
        "content-Type":"text/json"
     },
     "body":json_data
  })
  }



async function handleDelete(id){
   console.log("id : ",id);

   let response = await fetch('http://127.0.0.1:3000/deleteData',{
      "method":"DELETE",
      "headers":{
         "content-Type":"text/plain"
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

 