import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    return (<div id="home" className="p-4">
        <header className="px-60 py-20 text-center">
            <p id="boldstyle" className="text-5xl text-slate-700">Who don't love shopping ? and that on wholesale price XD.</p>
            <p className="text-slate-500 py-4">we are the largest salers of Nepal, feel free to roam around and find the products that will stick to your <span className='text-red-500'>heart</span> first.</p>
            <div className='border-2 border-slate-400/50 rounded-lg px-8 py-2 inline text-center'>
                <IconButton type="button" aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    placeholder="Quick Search"
                    inputProps={{ 'aria-label': 'search google maps' }}
                /></div>
        </header>
    </div>);
};

export default Home;
