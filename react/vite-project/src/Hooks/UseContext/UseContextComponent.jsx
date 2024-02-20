import React,{useState,createContext} from "react";
import ThemedComponent from "./ThemedComponent";
import Themeselector from "./Themeselector";
export const Themecontext=createContext();

function UsecontextComponent(){

    const [theme,setTheme]=useState('white');

    const contextValue={theme,setTheme};

return(
    <Themecontext.Provider value={contextValue}>
    <ThemedComponent/>
    <Themeselector/>
    </Themecontext.Provider>
)
}

export default UsecontextComponent;