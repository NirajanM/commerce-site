import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

function App() {

  return (
    <>
      <Router>
        <nav className='bg-blue-600 px-12 py-8 flex justify-between items-center'>
          <span className='font-black text-lg text-white'>AlienStickers</span>
          <div className='flex justify-between gap-12 font-small items-center'>
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="/">
              <span>About</span>
            </Link>
            <Link to="/">
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
