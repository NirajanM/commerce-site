
interface IFooterProps {
}
const currentYear: number = new Date().getFullYear();
const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    return (
        <footer className='text-xs sm:text-lg bg-blue-600 h-60 text-white flex justify-around flex-col items-center'>
            <span>&#60; Designed and Developed by <a className='font-bold' href="https://www.nirajanmalla.com.np">Nirajan Malla</a> /&#62;</span>
            <span>© {currentYear}, All rights reserved.</span>
            <span></span>
        </footer>
    );
};

export default Footer;
