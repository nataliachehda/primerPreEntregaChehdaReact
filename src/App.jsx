import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a la tiendita Abuelarte"}/>
    </>
    
  )
}

export default App