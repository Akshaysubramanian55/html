import React, { useRef } from "react";

function Uncontrolled() {
    const inputRef = useRef(null);


    function handleClick(){
        console.log("inputRef : ",inputRef.current.value);
        alert(`Input Value : ${inputRef.current.value}`)
    }
    return (
        <>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Click me</button>
        </>
    )

}
export default Uncontrolled