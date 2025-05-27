import './LandingPage.css'
import HeaderTitle from './HeaderTitle'
import HeaderBoard from './../HeaderBoard'
import FooterBoard from './../FooterBoard'
import HeaderHook from './HeaderHook'
import HeaderTopics from './HeaderTopics'
import LatestPosts from './LatestPosts'

const LandingPage = () => {
    return (
        <div className='landing-page-container'>
            <HeaderBoard />
            <header className='header-container'>
                <HeaderTitle /> 
                <section className='header-content-container'>  
                    <HeaderHook />
                    <HeaderTopics />
                </section>
            </header>
            <section className='latest-posts-container'>
                <LatestPosts />
                <FooterBoard />
            </section>
        </div>
    )
}

export default LandingPage