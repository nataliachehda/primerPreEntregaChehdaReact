import React from 'react'
import './CartWidget.css'
import ItemCount from '../ItemCount/ItemCount';

const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png";
    return (
        <div className='carrito'>
            <img className='imgCarrito' src={imgCarrito} alt="carrito de compras" />
            <strong> <ItemCount/> </strong>
        </div>
    )
}

export default CartWidget