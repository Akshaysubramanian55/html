import React,{useState} from "react";

function Login1(){
    let [isLogedIn,setisLogedIn]=useState(true);
    let content;
    if(isLogedIn){
      content= <h1>Welcome,User!</h1>
    }else{
        content=<h1>Please Login</h1>
    }

    return(
        <>
        {content}
        </>
    )
}
export default Login1;