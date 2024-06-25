import React, { useState } from "react";
import image from './assets/kongu1.jpg'
const Func=()=>{
    const [count,setCount]=useState(0);
    const handleIncrement=()=>{
         setCount(count+1);
    }
    return(
        <>
        Hii from functional component
        {/* <img src={image}/> */}
        <button onClick={handleIncrement}>Increment</button>
        <span>{count}</span>
        </>
    )
}
export default Func;