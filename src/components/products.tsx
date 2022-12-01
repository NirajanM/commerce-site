import { useLocation, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayProduct from './displayProduct';
interface IProductsProps {
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


const Products: React.FunctionComponent<IProductsProps> = (props) => {
    const location = useLocation();
    const [products, setProducts] = useState<null | [tProducts]>(null);
    const fetchProducts = async () => {
        try {
            const res = await axios.get(`https://dummyjson.com/products${location.pathname}`);
            setProducts(res.data.products);
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
            <div className='flex justify-center py-4 flex-col'>
                <span>
                    <Link className='text-white bg-blue-400 hover:bg-blue-600 hover:scale-110 rounded-lg border-2 text-lg px-4 mb-4' to="/">
                        Go back
                    </Link></span>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 px-12 py-8'>
                    {products?.map((product) => {
                        return <DisplayProduct
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
                        />
                    })}
                </div>
            </div>
        </div>);
};

export default Products;
