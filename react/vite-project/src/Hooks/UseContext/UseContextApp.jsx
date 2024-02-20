import React,{createContext} from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";



export const MyContext=createContext('default');



function UseContextApp(){
    console.log("UseContextApp re-rendering.....");

    return(
        <MyContext.Provider value="Hello from Context">
        <ComponentA/>
        <ComponentB/>
        </MyContext.Provider>
    )
}

export default UseContextApp;