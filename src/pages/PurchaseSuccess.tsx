import { Link } from "react-router-dom";

interface IPurchaseSuccessfulProps {
}

const PurchaseSuccessful: React.FunctionComponent<IPurchaseSuccessfulProps> = () => {
    return (
        <div className='h-screen flex justify-center flex-col gap-8 items-center text-slate-500'>
            <span className="text-xl lg:text-3xl font-light text-center">Thank you for purchasing from our product, <br /> your order is successfully placed</span>
            <span className="text-xs lg:text-sm text-slate-500 border-b-2 py-4 border-slate-400"> you will get confirmation mail shortly</span>
            <Link to="/" className="px-2 py-1 border-2 rounded-lg border-blue-500 hover:bg-blue-200/40">Go To Homepage</Link>
        </div>
    );
};

export default PurchaseSuccessful;
