//import { useState,useEffect } from 'react'
import './App.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import CharacterList from './components/characterlist/Characterlist';
import Personaje from './components/personaje/Personaje';

function App() {
  
  return (
    <>
      <Header/>
      <CharacterList/>
      <Personaje/>
      <Footer/>
    </>
  )
}

export default App
