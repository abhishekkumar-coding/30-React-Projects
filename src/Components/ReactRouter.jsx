import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from './forRouter/Home'
import About from './forRouter/About'
import Contact from './forRouter/Contact'
function ReactRouter() {
  return (
    <BrowserRouter>
    <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
            <li><Link to='/About'>About</Link></li>
        </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRouter;
