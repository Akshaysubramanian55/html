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
      </tr>
       `
       
    }
    console.log("content : ",content);
    tbody.innerHTML=content;
}
 
 getuserdata();

 function handleEdit(){
    document.getElementById("tbody").innerHTML = "completed";
 }
 async function handleDelete(id){
    console.log("id : ",id);
 
    let response = await fetch('http://localhost:3000/deleteData',{
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
 