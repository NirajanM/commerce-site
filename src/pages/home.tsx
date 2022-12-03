import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShieldIcon from '@mui/icons-material/Shield';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { Routes, Route } from 'react-router-dom';
import Categories from '../components/categories';
import Products from '../components/products';
import LoginButton from '../components/Login';
import DisplayProduct from '../components/displayProduct';

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
    user: {}
    authenticate: boolean
    products: tProducts[]
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    const { user, authenticate } = props;

    return (
        <div id="home" className="py-4">
            <header className="xl:px-60 lg:px-52 md:px-40 sm:px-20 px-10 py-28 text-center">
                <p id="boldstyle" className="text-2xl text-slate-600 md:text-5xl md:text-slate-700">Who don't love shopping ? and that on wholesale price XD.</p>
                <p className="text-slate-500 py-4">we are the largest salers of Nepal, feel free to roam around and find the products that will stick to your <span className='text-red-500'>heart</span> first.</p>
                {!authenticate && <LoginButton />}
            </header>
            <section id="hot-products" className='text-center my-8'>
                <span className='text-slate-500 text-3xl font-black border-b-4'>Latest Products</span>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-4 sm:0 px-2 sm:gap-12 sm:px-12 py-8'>
                    {props.products?.map((product) => {
                        return (
                            (product.id) % 5 == 0 ?
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
    );
};

export default Home;
