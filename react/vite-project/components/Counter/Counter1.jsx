import React,{useState} from "react";

function Counter1(props){

    console.log("function is re-rendering")

    const [count,setCount] = useState(props.initialvalue);

    const handleClick =()=> {
     setCount(count+1);
    }

  return(
    <>
    <p>Count : {count}</p>
    <button onClick={handleClick}>Increment</button>
    </>
  )
}
export default Counter1;