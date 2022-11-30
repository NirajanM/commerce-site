import { Link } from "react-router-dom";
import React from 'react';

interface ICardProps {
    name: string;
    route: string;
    src: string;
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
    return (
        <Link to={props.route} className="border-2 border-blue-100 p-1 md:p-4 lg:p-0 lg:py-4 cursor-pointer text-xl font-bold text-slate-500 text-center hover:bg-blue-500 hover:text-white hover:scale-105 flex md:justify-center md:flex-col items-center ">
            <div className="flex justify-center md:w-2/3 w-1/5 mr-4 items-center ">
                <img src={props.src} className="h-20" />
            </div>
            <span>{props.name}</span>
        </Link>
    );
};

export default Card;
