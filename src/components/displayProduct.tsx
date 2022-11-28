import * as React from 'react';

interface IDisplayProductProps {
    title: String;
    description: String;
    price: Number;
    discount: Number;
    rating: Number;
    stock: Number;
    brand: String;
    category: String;
    thumbnail: String,
    images: [
        String
    ]
}

const DisplayProduct: React.FunctionComponent<IDisplayProductProps> = (props) => {
    return (<></>);
};

export default DisplayProduct;
