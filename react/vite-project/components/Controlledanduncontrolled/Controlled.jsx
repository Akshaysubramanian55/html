import React,{useState} from "react";

function Controlled(){

   let [inputValue,setInputValue] =useState('');

   function handleInputChange(e){

      setInputValue(e.target.value)
   }

    return(

        <>
        <input type="text" value={inputValue} onChange={handleInputChange}/>
        </>
    )
}

export default Controlled;