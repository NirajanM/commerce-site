import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShieldIcon from '@mui/icons-material/Shield';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { Routes, Route } from 'react-router-dom';
import Categories from '../components/categories';
import Products from '../components/products';
import LoginButton from '../components/Login';
import { Fab, Dialog } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useEffect } from 'react'
import axios from "axios"

interface IHomeProps {
    user: {}
    authenticate: boolean
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


const Home: React.FunctionComponent<IHomeProps> = (props) => {
    const { user, authenticate } = props;

    const [wholeProducts, setWholeProducts] = useState<tProducts[] | null>(null);

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
            <Dialog onClose={handleCartClose} open={openCart}>
                <div className='text-center'>
                    <div className='flex snap-x'>
                        hello world
                    </div>
                </div>
            </Dialog>
        );
    }

    return (
        <>
            <div className='fixed bottom-6 right-6 z-10'>
                <Fab aria-label="add" >
                    <ShoppingCartIcon className='text-blue-500/80 hover:text-blue-700' onClick={handleCartClick} />
                    <div className='py-2'>
                        <CartDialog
                            open={openCart}
                        />
                    </div>
                </Fab>
            </div>
            <div id="home" className="py-4">
                <header className="xl:px-60 lg:px-52 md:px-40 sm:px-20 px-10 py-28 text-center">
                    <p id="boldstyle" className="text-2xl text-slate-600 md:text-5xl md:text-slate-700">Who don't love shopping ? and that on wholesale price XD.</p>
                    <p className="text-slate-500 py-4">we are the largest salers of Nepal, feel free to roam around and find the products that will stick to your <span className='text-red-500'>heart</span> first.</p>
                    {/* <div className='border-2 border-slate-400/50 rounded-lg px-8 py-2 inline text-center'>
                    <IconButton type="button" aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        placeholder="Quick Search"
                        inputProps={{ 'aria-label': 'Quick Search' }}
                    /></div> */}
                    {!authenticate && <LoginButton />}
                </header>
                <section>
                    <p className='bg-blue-500 text-white font-semibold text-2xl py-2 text-center'>Products Categories:</p>
                    <Routes>
                        <Route path="" element={<Categories />} />
                        <Route path='category/*' element={<Products />} />
                    </Routes>
                </section>
                <div className=' shadow-lg shadow-blue h-8'></div>
                <section className='text-center py-40 px-4'>
                    <span className='text-blue-500 text-3xl border-b-4 font-bold'>Why Us ?</span>
                    <div className='flex flex-col md:flex-row justify-evenly items-evenly gap-8 md:gap-0 p-12 text-slate-600'>
                        <div className='flex items-center justify-center'>
                            <LocalShippingIcon fontSize='large' />
                            <div className='flex flex-col text-left px-4'>
                                <span className='text-lg'>FAST SHIPPING</span>
                                <span className='text-slate-400'>All Over Nepal</span>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <ShieldIcon fontSize='large' />
                            <div className='flex flex-col text-left px-4'>
                                <span className='text-lg'>TRUST WORTHY</span>
                                <span className='text-slate-400'>Since 40+ Years</span>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <HandshakeIcon fontSize='large' />
                            <div className='flex flex-col text-left px-4'>
                                <span className='text-lg'>CASH ON DELIVERY</span>
                                <span className='text-slate-400'>Pay Hand To Hand</span>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
