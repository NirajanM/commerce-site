
interface IFooterProps {
}
const currentYear: number = new Date().getFullYear();
const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    return (
        <footer className='text-sm font-small bg-blue-600 py-4 text-slate-200 flex justify-between px-28 items-center'>
            <div className="flex flex-col">
                <span>© {currentYear}, All rights reserved.</span>
                <span>&#60; Designed and Developed by <a className='font-semibold' href="https://www.nirajanmalla.com.np">Nirajan Malla</a> /&#62;</span>
            </div>
            <span className="cursor-pointer" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>scroll to top ⬆</span>
        </footer>
    );
};

export default Footer;
