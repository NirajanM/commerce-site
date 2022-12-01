import { useState, useCallback, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Footer from './components/footer';
import Home from './pages/home';
import Contact from './pages/contact';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useAuth0, User } from "@auth0/auth0-react";
import { Avatar, Tooltip, Menu, DialogTitle } from '@mui/material'
import LogoutButton from './components/Logout';
import { CartContext } from './context/CartContext';
import { Fab, Dialog } from '@mui/material'
import axios from "axios"

type tCart = {
  productId: number;
  amount: number;
}

type tProducts = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string,
  images: [
    string
  ]
}

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

  //cart logic:
  const [userCart, setUserCart] = useState<tCart[]>([]);
  const addCart = useCallback(
    (newCart: tCart[]) => setUserCart(newCart),
    [userCart]
  );
  const clearCart = useCallback(() => setUserCart([]), []);
  const removeItem = useCallback(
    (id: number) => setUserCart(userCart.filter((t) => t.productId !== id)),
    [userCart]
  );


  const [wholeProducts, setWholeProducts] = useState<tProducts[] | []>([]);

  //fetching all products in beginning
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products?limit=100`);
      setWholeProducts(res.data.products);
      console.log(wholeProducts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //cart icon logic with dialog
  const [openCart, setOpenCart] = useState<boolean>(false);

  const handleCartClick = () => {
    setOpenCart(true);
  };

  interface CartDialogProps {
    open: boolean;
  }

  function CartDialog(props: CartDialogProps) {
    const { open } = props;

    const handleCartClose = () => {
      setOpenCart(false);
    };

    return (
      <>
        <Dialog onClose={handleCartClose} open={openCart}>
          <>
            <span className='px-8 py-2 text-lg font-black text-blue-400 border-b-2 border-blue-500'>your cart:</span>
            {userCart.map((item) => {
              return (
                <div className="border-2 border-blue-100 p-1 cursor-pointer text-xl text-slate-500 text-center flex items-center ">
                  <div className="flex justify-center w-1/5 mr-4 items-center ">
                    <img src={`https://i.dummyjson.com/data/products/${item.productId}/thumbnail.jpg`} className="h-12" />
                  </div>
                  <span className="text-lg md:mt-4">
                  </span>
                </div>
              )
            })}
          </>
        </Dialog>
      </>
    );
  }


  return (
    <>
      <div className='fixed bottom-6 right-6 z-10'>
        <Fab aria-label="add" onClick={handleCartClick} >
          <ShoppingCartIcon className='text-blue-500/80 hover:text-blue-700' />
        </Fab>
        <div className='py-2'>
          <CartDialog
            open={openCart}
          />
        </div>
      </div>
      <Router>
        <CartContext.Provider value={{
          addCart,
          removeItem,
          clearCart,
          userCart
        }}>
          <nav className='bg-blue-600  px-1 md:px-8 lg:px-12 py-8 flex justify-between items-center shadow-xl'>
            <span className="font-black text-sm sm:text-md md:text-lg flex justify-center items-center text-white"><StorefrontIcon /> AlienShop</span>
            <div className='flex justify-between gap-2 sm:gap-4 md:gap-8 lg:gap-12 font-small items-center'>
              <Link to="/">
                <span className={activeHome ? "scale-105 border-b-4 font-black py-2 px-1 text-lg md:text-2xl py-1" : "hover:border-2 hover:rounded-lg hover:py-2 hover:px-1 text-sm md:text-lg hover:text-white"} onClick={() => { setActiveHome(!activeHome) }}>Home</span>
              </Link>
              <Link to="/contact">
                <span className={!activeHome ? "scale-105 border-b-4 font-black py-2 px-1 text-lg md:text-2xl py-1" : "hover:border-2 hover:rounded-lg hover:py-2 hover:px-1 text-sm md:text-lg hover:text-white"} onClick={() => { setActiveHome(!activeHome) }}>Contact</span>
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
                  <div className='flex justify-center align-center flex-col text-center px-4 py-1'>
                    <p className='p-1 font-bold text-slate-600 mb-2'>Logged in as:<br /><span className='text-sm text-slate-400'>{user?.name}</span></p>
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
        </CartContext.Provider>
      </Router>
    </>
  )
}

export default App
