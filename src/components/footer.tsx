
interface IFooterProps {
}
const currentYear: number = new Date().getFullYear();
const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    return (
        <footer className='text-xs sm:text-lg bg-blue-600 h-36 text-white flex justify-evenly flex-col items-center'>
            <span>&#60; Designed and Developed by <a className='font-semibold' href="https://www.nirajanmalla.com.np">Nirajan Malla</a> /&#62;</span>
            <span>© {currentYear}, All rights reserved.</span>
        </footer>
    );
};

export default Footer;
