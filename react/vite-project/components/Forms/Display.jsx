import React,{useState} from "react";

function Display({data}){
    return(
        <>
        <p>Name:{data.name}</p>
        <p>Email:{data.email}</p>
        </>
    )
}
export default Display;