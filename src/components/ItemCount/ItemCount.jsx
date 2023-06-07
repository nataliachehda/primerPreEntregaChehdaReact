import React from 'react';
import { useState } from 'react';
import './ItemCount.css'

const ItemCount = () => {
    const [counter, setCounter]= useState(1)
    const increase =() => {
        if (counter < 10){
        setCounter (counter + 1)
        }
    }
    const decrease =() => {
        if (counter > 1){
        setCounter(counter - 1)
        }
    }

    return (
    <div className='contador'>
        <button onClick={decrease}>-</button>
        <p>{counter}</p>
        <button onClick={increase}>+</button>   
    </div>
  )
}

export default ItemCount