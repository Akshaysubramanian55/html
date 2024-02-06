async function submitform(){
   let name=document.getElementById('name').value;
   console.log("name : ",name);

   let email=document.getElementById('email').value;
   console.log("email : ",email);

   let password=document.getElementById('password').value;
   console.log("password : ",password);

  let imageInput=document.getElementById('image');

  if(imageInput.files && imageInput.files[0]){
   const reader =new FileReader();

   reader.onload=async function(e){
      const base64Image=e.target.result;
      console.log("base64Image: ",base64Image);

      let data={
         name,
         email,
         password,
         base64Image,
      }

      let json_data=JSON.stringify(data);
      try {
         let response = await fetch('/submit', {
             method: "POST",
             headers: {
                 "Content-Type": "application/json",
             },
             body: json_data,
         });

         let parsed_response = await response.text();

         if (parsed_response === "success") {
             alert("Submitted successfully");
         } else {
             alert("Submission failed");
         }
     } catch (error) {
         console.error("Error:", error);
         alert("An error occurred while submitting the form");
     }
 }

 reader.readAsDataURL(imageInput.files[0]);
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
     <td>
     <input type="text" name="name" class="name" id="name-${parsedUserData[i]._id}" value="${parsedUserData[i].name}" disabled="true" onkeyup="validateName('${parsedUserData[i]._id}')" 
     <div id="name1" ></div>
     </td>
     <td><input type="email" name="email" class="email" id="email-${parsedUserData[i]._id}" value="${parsedUserData[i].email}" disabled="true" onkeyup="validateEmail('${parsedUserData[i]._id}')"</td>
     <td><input type="password" name="password"  id="password-${parsedUserData[i]._id}" value="${parsedUserData[i].password}" disabled="true"  onkeyup=" ValidatePassWord('${parsedUserData[i]._id}')" </td>


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


function validateName(id){
let _id=id;
   console.log("id : ",_id);

   let name=document.getElementById(`name-${_id}`);
   console.log("name : ",name);
   let td = document.getElementById('name1');
    console.log("td : ", td);
   
   test=name.value;

   let name_regex=/^[A-za-z]{2,30}( [a-zA-Z]{2,30})?$/;

   let isnamevalid=name_regex.test(test);
   console.log("isnamevalid: ",isnamevalid);

   name.style.backgroundColor= isnamevalid? 'green' : 'darkred';
   if (!isnamevalid) {
      td.innerHTML = "invalid";
  } else {
      td.innerHTML = ""; 
  }
}

  function validateEmail(id){
   let _id=id;
   console.log("id : ",_id);

   let email=document.getElementById(`email-${_id}`);
   console.log("email : ",email);
   
   
   test=email.value;


   let email_regex=/^[a-z0-9_-]*@([a-z0-9]+)*(\.[a-z]{2,3})$/i

   let isemailvalid=email_regex.test(test);
   console.log("isemailvalid : ",isemailvalid);

   email.style.backgroundColor= isemailvalid? 'green' : 'red';


}

function ValidatePassWord(id){
   let _id=id;
   console.log("id : ",_id);

   let password=document.getElementById(`password-${_id}`);
   console.log("password : ",password);
   
   
   test=password.value;

   let password_regex =/^[a-z0-9,-=_@\.]{6,}$/;
   let ispasswordvalid=password_regex.test(test);
   console.log("ispasswordvalid : ",ispasswordvalid);


   password.style.backgroundColor= ispasswordvalid? 'green' : 'red';

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

   await fetch('/editData',{
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

async function validatename(){
   let name=document.getElementById('name').value;

   let name_error=document.getElementById('name-error');

   let name_regex=/^[A-za-z]{2,30}( [a-zA-Z]{2,30})?$/;

   let isnamevalid=name_regex.test(name);
   console.log("isnamevalid: ",isnamevalid);


   // let parsed_response = await response.text();
   


   if(!isnamevalid){
      name_error.innerHTML="Invalid Name";
      return;
   }else{
      name_error.innerHTML="";
      return
   }
  
}




function validateemail(){
   let email=document.getElementById('email').value;
   let email_error=document.getElementById('email-error');

   let email_regex=/^[a-z0-9_-]*@([a-z0-9]+)*(\.[a-z]{2,3})$/i

   let isemailvalid=email_regex.test(email);
   console.log("isemailvalid : ",isemailvalid);

   if(!isemailvalid){
      email_error.innerHTML="invalid email";
   }else{
      email_error.innerHTML=""
   }
}

function validatepassword(){

   let password=document.getElementById('password').value;
   let password_error=document.getElementById('password-error');

   let password_regex =/^[a-z0-9,-=_@\.]{6,}$/;
   let ispasswordvalid=password_regex.test(password);
   console.log("ispasswordvalid : ",ispasswordvalid);

   if(!ispasswordvalid){
      password_error.innerHTML="invalid password";
   }else{
      password_error.innerHTML=""
   }
}


