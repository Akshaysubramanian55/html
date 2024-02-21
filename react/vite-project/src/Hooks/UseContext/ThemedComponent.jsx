import React,{useContext} from "react";

import { Themecontext } from "./UseContextComponent";

function ThemedComponent(){
     
   const {theme}=useContext(Themecontext);

   return(theme ==='white')?(<div style={{background:theme}}>Themed Component</div>):(<div style={{background:theme,color:'white'}}>Themed Component</div>)
}
export default ThemedComponent;