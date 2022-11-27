

interface ICardProps {
    name: String;
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
    return (
        <span className="border-2 border-blue-100 p-8 cursor-pointer text-xl font-bold text-slate-500 text-center hover:bg-blue-500 hover:text-white hover:scale-105">{props.name}</span>
    );
};

export default Card;
