import { useState } from "react"

export default function Team(){
    const [count, setCount] =  useState(0);

const handleAdd = () =>{
   const newCount = count + 1;
   setCount(newCount);
}

const handleReduce = () =>{
    const newCount = count - 1;
    setCount(newCount);
}
    return(
         <div style={{border:'2px solid red', marginTop:'10px'}}>
            <h2>Players:{count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Remove</button>
         </div>
    )
}