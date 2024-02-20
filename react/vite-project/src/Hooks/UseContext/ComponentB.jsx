import React,{useContext} from "react";
import { MyContext } from "./UseContextApp";

function ComponentB(){
    console.log("ComponentB re-rendering....");

    const contextValue=useContext(MyContext);
return <div>ComponentB:{contextValue}</div>

}

export default ComponentB;