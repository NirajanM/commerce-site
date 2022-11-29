import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Footer from './components/footer';
import Home from './pages/home';
import Contact from './pages/contact';
import StorefrontIcon from '@mui/icons-material/Storefront';


function App() {
  const [activeHome, setActiveHome] = useState<Boolean>(true);
  return (
    <>
      <Router>
        <nav className='bg-blue-600 px-12 py-8 flex justify-between items-center shadow-xl'>
          <span className="font-black text-lg flex justify-center items-center text-white"><StorefrontIcon /> AlienShop</span>
          <div className='flex justify-between gap-12 font-small items-center'>
            <Link to="/">
              <span className={activeHome ? "scale-105 border-b-4 font-black py-2 px-1 text-xl py-1" : "hover:border-2 hover:rounded-lg hover:py-2 hover:px-1 hover:text-white"} onClick={() => { setActiveHome(!activeHome) }}>Home</span>
            </Link>
            <Link to="/contact">
              <span className={!activeHome ? "scale-105 border-b-4 font-black py-2 px-1 text-xl py-1" : "hover:border-2 hover:rounded-lg hover:py-2 hover:px-1 hover:text-white"} onClick={() => { setActiveHome(!activeHome) }}>Contact</span>
            </Link>
            <span className='cursor-pointer'><ShoppingCartIcon /></span>
          </div>
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
