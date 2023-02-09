import './App.css'
import React from 'react';
import Inventory from './components/Inventory';
import AddInventory from './components/AddInventory'
import UpdateInventory from './components/UpdateInventory'
import SingleInventory from './components/SingleInventory'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function App() {
  return (
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inventory />} />
          <Route path='/addInventory' element={<AddInventory />} />
          <Route path='/updateInventory/:id' element={<UpdateInventory />} />
          <Route path='/SingleInventory/:id' element={<SingleInventory />} />
        </Routes>
      </BrowserRouter>
  )
}
