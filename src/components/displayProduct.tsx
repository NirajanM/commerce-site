import { Rating, Button, Dialog } from '@mui/material';
import { useState, useContext } from "react";
import { CartContext } from '../context/CartContext';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface IDisplayProductProps {
    id: number;
    title: string;
    price: number;
    discount: number;
    stock: number;
    rating: number;
    description: string;
    brand: string;
    category: string;
    thumbnail: string,
    images: [
        string
    ]
}

const DisplayProduct: React.FunctionComponent<IDisplayProductProps> = (props) => {
    const { addCart, removeItem, userCart, clearCart } = useContext(CartContext);

    //snackbar right bottom corner
    const [openSnack, setOpenSnack] = useState(false);

    const handleClickSnack = () => {
        setOpenSnack(true);
    };

    const handleCloseSnack = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnack(false);
    };

    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseSnack}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );

    //image drawer opener
    interface SimpleDialogProps {
        open: boolean;
        images: [string];
    }

    function SimpleDialog(props: SimpleDialogProps) {
        const { open, images } = props;

        const handleClose = () => {
            setOpen(false);
        };

        return (
            <Dialog onClose={handleClose} open={open}>
                <div className='text-center'>
                    <div className='flex snap-x'>
                        {images.map((item) => (
                            <img
                                src={item}
                                className="h-40 sm:h-60 md:h-80 snap-center"
                                onClick={() => { window.open(item) }}
                            />
                        ))}
                    </div>
                </div>
            </Dialog>
        );
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };


    //logic to add to cart in certain case
    const addToCart = (id: number) => {
        let counter = 0
        const newUserCart = userCart.map((eachItem) => {
            if (eachItem.productId === id) {
                counter++;
                return (
                    {
                        productId: id,
                        amount: eachItem.amount + 1
                    }
                )
            }
            else return eachItem;
        });

        if (counter != 0) {
            addCart(newUserCart)
        }
        else {

            addCart([...newUserCart, {
                productId: id,
                amount: 1
            }])
        }
    }

    return (

        <div className="w-full flex flex-col justify-between rounded-lg shadow-md ">
            <a href={props.thumbnail} target="_blank" className='flex justify-center'>
                <img className="p-8 rounded-t-lg h-46 sm-56 md:h-52 lg:h-64 xl:h-80 sm:h-80" src={props.thumbnail} alt="product image" />
            </a>
            <div className="px-5 h-full flex justify-between flex-col pb-5">
                <h5 className="text-lg font-semibold tracking-tight text-gray-700 dark:text-white">{props.title}</h5>
                <p className='text-sm font-normal text-gray-600 py-4'>{props.description}</p>
                <p className='text-sm font-normal text-gray-700 py-1'>brand : {props.brand}</p>
                <Button variant="outlined" onClick={handleClickOpen}>
                    product images
                </Button>
                <div className='py-2'>
                    <SimpleDialog
                        open={open}
                        images={props.images}
                    />
                </div>
                <div className="flex items-center justify-center sm:justify-start mt-2.5 mb-5">
                    <Rating name="read-only" value={props.rating} readOnly precision={0.5} />
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{props.rating}</span>
                </div>
                <div className="flex items-center flex-col sm:flex-row justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white py-8 sm:py-0">${props.price}</span>
                    <div>
                        <span className="font-medium text-gray-700 text-sm dark:text-white px-4">stock :{props.stock}</span>
                        <span
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
                            onClick={() => {
                                addToCart(props.id);
                                handleClickSnack();
                            }}
                        >Add to cart</span>
                        <Snackbar
                            open={openSnack}
                            autoHideDuration={6000}
                            onClose={handleCloseSnack}
                            message="Added To Cart"
                            action={action}
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DisplayProduct;