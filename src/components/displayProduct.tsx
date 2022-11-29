import { Rating, Button, Dialog, DialogTitle } from '@mui/material';
import { useState } from "react";

interface IDisplayProductProps {
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
    interface SimpleDialogProps {
        open: boolean;
        onClose: () => void;
        detail: string;
        images: [string];
    }

    function SimpleDialog(props: SimpleDialogProps) {
        const { onClose, open, detail, images } = props;

        const handleClose = () => {
            setOpen(false);
        };

        return (
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>{detail}</DialogTitle>
            </Dialog>
        );
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <div className="w-full rounded-lg shadow-md ">
            <a href={props.thumbnail}>
                <img className="p-8 rounded-t-lg h-80" src={props.thumbnail} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-700 dark:text-white">{props.title}</h5>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Check Details
                </Button>
                <SimpleDialog
                    open={open}
                    onClose={handleClose}
                    detail={props.description}
                    images={props.images}
                />
                <div className="flex items-center mt-2.5 mb-5">
                    <Rating name="read-only" value={props.rating} readOnly precision={0.5} />
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{props.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${props.price}</span>
                    <div>
                        <span className="text-3xl font-medium text-gray-700 text-sm dark:text-white px-4">stock :{props.stock}</span>
                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DisplayProduct;