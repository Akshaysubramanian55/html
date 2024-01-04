async function getuserdata(){
   let userData = await fetch ('http://localhost:3000/getData');
   console.log("userData : ",userData);
   
   let parsedUserData = await userData.json();
}