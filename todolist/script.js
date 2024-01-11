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
      <td><input type="text" name="name" id="name-${parsedUserData[i]._id}" value="${parsedUserData[i].name}" disabled="true"></td>
      </tr>
       `
       
    }
    
    tbody.innerHTML=content;
}
 
 getuserdata();