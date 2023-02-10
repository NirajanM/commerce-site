import { Link } from "react-router-dom";

interface IPurchaseCanceledProps {
}

const PurchaseCanceled: React.FunctionComponent<IPurchaseCanceledProps> = () => {
    return (
        <div className='h-screen flex justify-center flex-col gap-8 items-center text-slate-500'>
            <span className="text-xl lg:text-3xl font-bold uppercase border-b-4 border-slate-400 py-4">You canceled the purchase</span>
            <Link to="/" className="px-2 py-1 border-2 rounded-lg border-blue-500 hover:bg-blue-200/40">Go To Homepage</Link>
        </div>
    );
};

export default PurchaseCanceled;
