import React,{useEffect} from "react";

function Useeffectcomponent(){
    console.log("component rendering.....");

    useEffect(()=>{
        //code to run after the component has rendered
        console.log("component is re-rendered...");

    },[]);//empty dependency array that means it runs once after the initial render

    return <div>My Content</div>
}

export default Useeffectcomponent;