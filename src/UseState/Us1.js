import React, {useState} from 'react'

function Us(){
    const[msgObj,setMsg]=useState({message:''});
    const handleChange=(e)=>{
        let val = e.target.val;
        // msgObj.message=val;
        let obj = {message:val}
        setMsg(obj);
    }
    return (
        <div>
        <input type="text" value={msgObj.message} onChange={handleChange}></input>
        <p>{msgObj.message}</p>
        </div>
        )
}

export default Us;