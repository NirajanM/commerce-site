import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShieldIcon from '@mui/icons-material/Shield';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Categories from '../components/categories';
import Products from '../components/products';
interface IHomeProps {
}

type tProducts = {
    id: Number;
    title: String;
    description: String;
    price: Number;
    discountPercentage: Number;
    rating: Number;
    stock: Number;
    brand: String;
    category: String;
    thumbnail: String,
    images: [
        String
    ]
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    const [products, setProducts] = useState<null | [tProducts]>(null);
    const fetchProducts = async () => {
        try {
            const res = await axios.get<[tProducts]>(`https://dummyjson.com/products`);
            setProducts(res.data);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    return (<div id="home" className="py-4">
        <header className="px-60 py-20 text-center">
            <p id="boldstyle" className="text-5xl text-slate-700">Who don't love shopping ? and that on wholesale price XD.</p>
            <p className="text-slate-500 py-4">we are the largest salers of Nepal, feel free to roam around and find the products that will stick to your <span className='text-red-500'>heart</span> first.</p>
            <div className='border-2 border-slate-400/50 rounded-lg px-8 py-2 inline text-center'>
                <IconButton type="button" aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    placeholder="Quick Search"
                    inputProps={{ 'aria-label': 'Quick Search' }}
                /></div>
        </header>
        <section className='py-40 px-4'>
            <p className='bg-blue-500 text-white font-semibold text-2xl px-8 py-2 text-center'>Categories:</p>
            <Routes>
                <Route path="" element={<Categories />} />
                <Route path='category/*' element={<Products />} />
            </Routes>
        </section>
        <section className='text-center pb-40 px-4'>
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
    </div>);
};

export default Home;
