import './LandingPage.css'
import HeaderTitle from './HeaderTitle'
import HeaderBoard from './../HeaderBoard'
import FooterBoard from './../FooterBoard'
import HeaderTopics from './HeaderTopics'
import LatestPosts from './LatestPosts'
import HeaderHook from './HeaderHook'

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <HeaderBoard />
            
            <main>
                <div className="hero-wrapper">
                    <HeaderTitle />
                </div>
                
                <section className="topics-section">
                    <HeaderTopics />
                </section>

                <section className="latest-section">
                    <HeaderHook />
                    <LatestPosts />
                </section>
            </main>

            <FooterBoard />
        </div>
    )
}

export default LandingPage