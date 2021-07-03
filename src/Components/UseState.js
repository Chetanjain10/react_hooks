import React, {useState} from 'react'

function Counter(){
    const [count,setCount] = useState(0);
    const handleinc= ()=>{
        setCount(count+1);
    }
    const handledec= ()=>{
        setCount(count-1);
    }
    return (
        <div>
        <h1>{count}</h1>
        <button onClick={handleinc}>+</button>
        <button onClick={handledec}>-</button>
        </div>
        )
}

export default Counter;