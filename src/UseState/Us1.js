import React, {useState} from 'react'

function Us(){
    const[msgObj,setMsg]=useState({message:''});
    const handleChange=()=>{
        
    }
    return (
        <div>
        <input type="text" value={msgObj.message} onChange={handleChange}></input>
        </div>
        )
}

export default Us;