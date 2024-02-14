import React,{useState} from "react";

 function Login(){
let [isLogedIn,setisLogedIn]=useState(false);

return(

    <>
    {

        isLogedIn?(<h1>Welcome,User!</h1>):(<h1>Please Login</h1>)
    }
    </>
)
}

export default Login;