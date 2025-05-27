import icon from './../../assets/icon.png'
import './HeaderTitle.css'

const HeaderTitle = () => {
    return (
        <header className='header-title'>
            <h1>Harry's Coffee Blog</h1>
            <img src={icon} alt='coffee mug icon'/>
        </header>
    )
}


export default HeaderTitle