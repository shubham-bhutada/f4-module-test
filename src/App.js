import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
//importing the 2 pages...home and myCart
import CartHome from './Components/CartHome';
import MyCart from './Components/MyCart';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path='/' element={<CartHome/>}></Route>
        <Route path='/mycart' element={<MyCart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
