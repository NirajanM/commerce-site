import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import StorefrontIcon from '@mui/icons-material/Storefront';


function App() {

  return (
    <>
      <Router>
        <nav className='bg-blue-600 px-12 py-8 flex justify-between items-center'>
          <span className='font-black text-lg flex justify-center items-center text-white'><StorefrontIcon /> AlienShop</span>
          <div className='flex justify-between gap-12 font-small items-center'>
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="/about">
              <span>About</span>
            </Link>
            <Link to="/contact">
              <span>Contact</span>
            </Link>
            <span className='cursor-pointer'><ShoppingCartIcon /></span>
          </div>
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
