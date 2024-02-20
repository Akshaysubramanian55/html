import React,{useContext} from "react";
import { MyContext } from "./UseContextApp";


function ComponentA(){
    console.log("ComponentA re-rendering....");

    const contextValue=useContext(MyContext);
return <div>ComponentA:{contextValue}</div>

}

export default ComponentA