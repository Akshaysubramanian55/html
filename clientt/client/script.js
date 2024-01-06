async function getuserdata(){
   let userData = await fetch ('http://localhost:3000/getData');
   console.log("userData : ",userData);
   
   let parsedUserData = await userData.json();
   console.log("parseruserData : ",parsedUserData);

   let tbody =document.getElementById('tbody');
   let content='';

   for(let i=0;i<parsedUserData.length;i++){
       content= content + `
     <tr>
     <td>${parsedUserData[i]._id}</td>
     <td><input type="name" id="name" name="name-${parsedUserData[i]._id}" value="${parsedUserData[i].name}" disabled="true"</td>
     <td><input type="email" id="email" name="email-${parsedUserData[i]._id}" value="${parsedUserData[i].email}" disabled="true"</td>
     <td><input type="password" id="password" name="password-${parsedUserData[i]._id}" value="${parsedUserData[i].password}" disabled="true"</td>
     <td><button onclick="handleEdit('${parsedUserData[i]._id}')">Edit</button></td>
     </tr>
      `
      
   }
   
   tbody.innerHTML=content;
}

getuserdata();

function handleEdit(id){
 
   let _id=id;
   console.log("_id : ",_id);

   let name=document.getElementById(`name-${_id}`);
   console.log("name : ",name);
   // name.disabled=false;
}