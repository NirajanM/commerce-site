import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../components/card';
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
    const categories = [
        "smartphones",
        "laptops",
        "fragrances",
        "skincare",
        "groceries",
        "home-decoration",
        "furniture",
        "tops",
        "womens-dresses",
        "womens-shoes",
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "womens-watches",
        "womens-bags",
        "womens-jewellery",
        "sunglasses",
        "automotive",
        "motorcycle",
        "lighting"
    ]
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
        <section >
            <p className='bg-blue-500 text-white font-semibold text-2xl px-8 py-2 text-center'>Categories:</p>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-2 md:gap-3 md:p-3 lg:gap-4 lg:p-4 p-2'>
                {categories.map((product) => {
                    return (
                        <Card name={product} />
                    );
                })}
            </div>
        </section>
    </div>);
};

export default Home;
