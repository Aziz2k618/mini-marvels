import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'  
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <h1>Mini Marvels</h1>
      <p>Stationery & Toys</p>
    </div>
  );
}

export default App;
