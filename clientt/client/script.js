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
     <td>${parsedUserData[i].name}</td>
     <td>${parsedUserData[i].email}</td>
     <td>${parsedUserData[i].password}</td>
     </tr>
      `
   }
  
   tbody.innerHTML=content;
}

getuserdata();