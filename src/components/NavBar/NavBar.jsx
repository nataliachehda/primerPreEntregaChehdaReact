import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
<header>
    <h1>Abuelarte</h1>
    <nav>
        <ul>
            <li>Juguetes en madera</li>
            <li>Amigurumis</li>
            <li>Ropa de bebé</li>
            <li>Decoración</li>
        </ul>
    </nav>

    <CartWidget/>
</header>
  )
}

export default NavBar