async function submitform(){
   let name=document.getElementById('name').value;
   console.log("name : ",name);

   let email=document.getElementById('email').value;
   console.log("email : ",email);

   let password=document.getElementById('password').value;
   console.log("password : ",password);

   let data={
      name,
      email,
      password,
   }
   let json_data=JSON.stringify(data);
   let response= await fetch('/submit',{
     "method":"POST",
     "headers":{
      "Content-Type":"application/json",
     },
     "body":json_data,

   });

   let parsed_response = await response.text();

   if (parsed_response==="success"){
      alert("submitted successfully");
   }else{
      alert("submition failed");
   }
}



async function getuserdata(){
   let userData = await fetch ('/getData');
   console.log("userData : ",userData);
   
   let parsedUserData = await userData.json();
   console.log("parseruserData : ",parsedUserData);

   let tbody =document.getElementById('tbody');
   let content='';

   for(let i=0;i<parsedUserData.length;i++){
     content= content + `
     <tr>
     <td>${parsedUserData[i]._id}</td>
     <td><input type="text" name="name" id="name-${parsedUserData[i]._id}" value="${parsedUserData[i].name}" disabled="true"</td>
     <td><input type="email" name="email" id="email-${parsedUserData[i]._id}" value="${parsedUserData[i].email}" disabled="true"</td>
     <td><input type="password" name="password"  id="password-${parsedUserData[i]._id}" value="${parsedUserData[i].password}" disabled="true"</td>
     <td><button onclick="handleEdit('${parsedUserData[i]._id}')">Edit</button></td>
     <td><button onclick="handleSave('${parsedUserData[i]._id}')">Save</button></td>
     <td><button onclick="handleDelete('${parsedUserData[i]._id}')">Delete</button></td>
     </tr>
      `
      
   }
   
   tbody.innerHTML=content;
}



function handleEdit(id){
 
   let _id=id;
   console.log("id : ",_id);

   let name=document.getElementById(`name-${_id}`);
   console.log("name : ",name);
   name.disabled=false;

   let email=document.getElementById(`email-${_id}`);
   console.log("email : ",email);
   email.disabled=false;


   let password=document.getElementById(`password-${_id}`);
   console.log("password : ",password);
   password.disabled=false;
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
      email,
      password,
   }

   let json_data= JSON.stringify(data);

   await fetch('editData',{
      "method":"PUT",
      "headers":{
         "content-Type":"application/json"
      },
      "body":json_data
   });
   
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

function validatename(){
   let name=document.getElementById('name').value;

   let name_error=document.getElementById('name-error');

   let name_regex=/^[A-za-z]{2-30}( [a-zA-Z]{2-30})?$/

   let isnamevalid=name_regex.test(name);
   console.log("isnamevalid: ",isnamevalid);

   if(!isnamevalid){
      name_error.innerHTML="Invalid Name";
      return;
   }else{
      name_error.innerHTML="";
      return
   }
}
