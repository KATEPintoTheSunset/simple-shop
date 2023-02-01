import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { LoginSignup } from './components/pages/LoginSignup/Login-Signup';
import {ProductsList} from './components/pages/ProductsPage/ProductsList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginSignup></LoginSignup>}></Route>
        <Route path="" element={<ProductsList></ProductsList>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
