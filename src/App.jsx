import React from 'react'
import MainTitle from './components/mainTitle/mainTitle'
import ItemCount from './components/ItemCount/ItemCount'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {

  return (
    <>
      <NavBar/><ItemCount/>
      <ItemListContainer greeting={"Bienvenidos"}/>
      <MainTitle titulo = {"Bienvenidos"} marca = {"Abuelarte"}/>
    </>
    
  )
}

export default App