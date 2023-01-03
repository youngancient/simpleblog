import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import Dropdown from './Navbar/Dropdown';

function App() {

  return (
    <div className="App">
      <Navbar/>
      
      <div className="content">
        <Home/>
      </div>
    </div>
  )
}

export default App
