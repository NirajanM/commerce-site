import { Link } from "react-router-dom";
import React from 'react';

interface ICardProps {
    name: string;
    route: string;
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
    return (
        <Link to={props.route} className="border-2 border-blue-100 p-1 md:p-4 lg:p-8 cursor-pointer text-xl font-bold text-slate-500 text-center hover:bg-blue-500 hover:text-white hover:scale-105">
            <span>{props.name}</span>
        </Link>
    );
};

export default Card;
