import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Footer from './components/footer';
import Home from './pages/home';
import Contact from './pages/contact';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useAuth0, User } from "@auth0/auth0-react";
import { Avatar, Tooltip, Menu, MenuItem } from '@mui/material'
import LogoutButton from './components/Logout';



function App() {
  const [anchorEl, setAnchorEl] = useState<null | Element>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [activeHome, setActiveHome] = useState<Boolean>(true);
  const { user, isAuthenticated } = useAuth0();
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
            {isAuthenticated && (<>
              <Tooltip title="Open settings">
                <Avatar className='cursor-pointer' alt={user?.name} src={user?.picture} onClick={handleClick} sx={{ width: 28, height: 28 }} />
              </Tooltip>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}

              >
                <div className='flex justify-center align-center flex-col text-center'>
                  <p className='p-1 px-4 font-bold text-slate-600'>Logged in as:<br /><span className='text-sm text-slate-400'>{user?.name}</span></p>
                  <span><LogoutButton /></span>
                </div>
              </Menu>
            </>
            )}
          </div>
        </nav>
        <Routes>
          <Route index element={<Home user={User} authenticate={isAuthenticated} />} />
          <Route path="/*" element={<Home user={User} authenticate={isAuthenticated} />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
