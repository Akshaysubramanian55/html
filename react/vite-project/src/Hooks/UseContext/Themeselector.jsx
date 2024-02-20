import React,{useContext} from "react";


import { Themecontext } from "./UseContextComponent";

function Themeselector(){
    const {setTheme}=useContext(Themecontext);

    return(

        <div>
            <button onClick={()=>setTheme('white')}>Light Theme</button>
            <button onClick={()=>setTheme('black')}>Dark Theme</button>

        </div>
    )
}
export default Themeselector;