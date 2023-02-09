import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShieldIcon from '@mui/icons-material/Shield';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { Routes, Route } from 'react-router-dom';
import Categories from '../components/categories';
import Products from '../components/products';
import LoginButton from '../components/Login';
import DisplayProduct from '../components/displayProduct';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react"
import { useContext } from "react"
import { CartContext } from '../context/CartContext'

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

interface IHomeProps {
    products: tProducts[],
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    const [searchValue, setSearchValue] = useState<String>("");
    const { signedIn, handleSignIn } = useContext(CartContext);
    return (
        <div id="home" className="py-4">
            <header className="xl:px-60 lg:px-52 md:px-40 sm:px-20 px-10 py-28 text-center">
                <p id="boldstyle" className="text-2xl text-slate-600 md:text-5xl md:text-slate-700">Who don't love shopping ? and that on wholesale price XD.</p>
                <p className="text-slate-500 py-4">we are the largest salers of Nepal, feel free to roam around and find the products that will stick to your <span className='text-red-500'>heart</span> first.</p>
                {!signedIn ? <div className='flex flex-col justify-center items-center'><span className='text-slate-400 text-bold border-b-2'>To store your cart data:</span><LoginButton /></div> : null}
            </header>
            <section id="hot-products" className='text-center mt-8'>
                <span className='text-slate-500 text-lg sm:text-3xl font-black border-b-4'>Latest Products</span>
                <div id="hotProduct_grid"
                    className='grid grid-cols-1 md:grid-cols-2 justify-center xl:grid-cols-3 px-4 gap-4 mx-auto my-4 sm:gap-12 sm:px-12 py-8'>
                    {props.products?.map((product) => {
                        return (
                            (product.id + 6) % 30 == 0 ?
                                <DisplayProduct
                                    id={product.id}
                                    title={product.title}
                                    stock={product.stock}
                                    price={product.price}
                                    discount={product.discountPercentage}
                                    rating={product.rating}
                                    description={product.description}
                                    brand={product.brand}
                                    category={product.category}
                                    thumbnail={product.thumbnail}
                                    images={product.images}
                                /> : null)
                    })}</div>
            </section>
            <section className='pt-8 sm:pt-20 md:pt-40 flex justify-center items-center px-4' id="searchbar">
                <div className='flex border-2 border-slate-400/50 rounded-lg px-8 text-sm text-center'>
                    <IconButton type="button" aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        placeholder="Quick Search"
                        inputProps={{ 'aria-label': 'Quick Search' }}
                        value={searchValue}
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                        }}
                    />
                </div>
            </section>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-4 sm:0 px-4 gap-8 sm:gap-12 sm:px-12 py-8'>
                {(searchValue != "") ? props.products?.map((product) => {
                    return (
                        ((product.title.toLowerCase().includes(searchValue.toLowerCase()) || product.brand.toLowerCase().includes(searchValue.toLowerCase())) ?
                            <DisplayProduct
                                id={product.id}
                                title={product.title}
                                stock={product.stock}
                                price={product.price}
                                discount={product.discountPercentage}
                                rating={product.rating}
                                description={product.description}
                                brand={product.brand}
                                category={product.category}
                                thumbnail={product.thumbnail}
                                images={product.images}
                            /> : null)
                    )
                }) : null
                }</div>

            <section id="categoriesOfProducts">
                <p className='bg-blue-500 text-white font-semibold text-lg sm:text-2xl py-2 text-center'>Shop Products By Categories:</p>
                <Routes>
                    <Route path="" element={<Categories />} />
                    <Route path='category/*' element={<Products />} />
                </Routes>
            </section>
            <section className='text-center border-t-8 border pt-40 pb-20 blue-600'>
                <span className='text-slate-500 text-lg sm:text-3xl font-black border-b-4'>Best Selling Products:</span>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-4 sm:0 px-4 gap-8 sm:gap-12 sm:px-12 py-8'>
                    {props.products?.map((product) => {
                        return (
                            (product.id + 19) % 17 == 0 ?
                                <DisplayProduct
                                    id={product.id}
                                    title={product.title}
                                    stock={product.stock}
                                    price={product.price}
                                    discount={product.discountPercentage}
                                    rating={product.rating}
                                    description={product.description}
                                    brand={product.brand}
                                    category={product.category}
                                    thumbnail={product.thumbnail}
                                    images={product.images}
                                /> : null)
                    })}</div>
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
    );
};

export default Home;
