import React, { useContext } from 'react'
import MyContext from './Context'
import DemoChild from './DemoChild';
function Demo(){
    const val = useContext(MyContext);
    console.log(val);
    return (
        <DemoChild />
        )
}

export default Demo;