import { useLocation, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayProduct from './displayProduct';
interface IProductsProps {
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


const Products: React.FunctionComponent<IProductsProps> = (props) => {
    const location = useLocation();
    const [products, setProducts] = useState<[] | [tProducts]>([]);
    const fetchProducts = async () => {
        try {
            const res = await axios.get<[tProducts]>(`https://dummyjson.com/products${location.pathname}`);
            setProducts(res.data);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className='text-slate-600 text-center py-1'>
            <span className='border-b-2 border-blue-400'>{location.pathname}</span>
            <div className='flex justify-center py-4'>
                <Link className='text-white bg-blue-400 hover:bg-blue-600 hover:scale-110 rounded-lg border-2 text-lg px-4 mb-4' to="/">
                    Go back
                </Link>
                <div className='grid grid-col-1 md:grid-col-1'>
                    {products.map((product) => {
                        return <DisplayProduct
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
                        />
                    })}
                </div>
            </div>
        </div>);
};

export default Products;
