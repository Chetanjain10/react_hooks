import React, { useState } from 'react'
import MyContext from './Context'
import Demo from './Demo';
function Main(){
    const [count,setCount]=useState(0);
    return (
        <div>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
            <MyContext.Provider value={count}> 
            <Demo />
            </MyContext.Provider>
        </div>
        )
}

export default Main;