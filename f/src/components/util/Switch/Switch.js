import React, { useState } from 'react'
import './style.css'

const Switch = (props) => {
    const [value, setValue] = useState(0)

    const handlePos = () => setValue(1)
    const handleNeg = () => setValue(2)
    if(props.pos === undefined){
        return (
            <div className='switch-title-container'>
                <div>{props.title}</div>
            </div>
        )
        
    }   else {
        switch(value) {
            case 0: return (
                <div className='switch-container'>
                    <div>{props.title}</div>
                    <div onClick={handlePos}>{props.pos}</div>
                    <div onClick={handleNeg}>{props.neg}</div>
                </div>
            );
            case 1: return (
                <div className='switch-container'>
                    <div>{props.title}</div>
                    <div onClick={handlePos} className='pos'>{props.pos}</div>
                    <div onClick={handleNeg}>{props.neg}</div>
                </div>
            );
            case 2: return (
                <div className='switch-container'>
                    <div>{props.title}</div>
                    <div onClick={handlePos}>{props.pos}</div>
                    <div onClick={handleNeg} className='neg'>{props.neg}</div>
                </div>
            );
            default: return (
                <div className='switch-container'>
                    <div>{props.title}</div>
                    <div onClick={handlePos}>{props.pos}</div>
                    <div onClick={handleNeg}>{props.neg}</div>
                </div>
            );
        }
    }
    
}

export default Switch