import React from 'react';
import './homePage.scss';
import { Link } from 'react-router-dom';
import Carpentry from '../../assets/images/carpentry.jpg'
import Electrician from '../../assets/images/electrician.jpg'
import Plumbing from '../../assets/images/plumbing.jpg'
import Mechanic from '../../assets/images/mechanic.jpg'



function HomePage() {
    return (
        <>  
            <section className="hero">
                <h1 className="hero__title">Welcome to FindMe</h1>
                <div className="hero__sub-title">Need a Professional Service Provider? Login!</div>
                <div className="hero__action">Book Now</div>
            </section>

            <section className="main-container">
                <div className="main-container__left">
                    <h4 className="main-container__title">How FindMe Works</h4>
                    <p className="main-container__content">The main discussion topics at FindMe often pave the way to surprising and unexpected conversations 
                    thanks to our engaged forum users. Our Forum is dedicated to enhancing the forum experience by offering plenty of opportunities for users 
                    to engage with each other in an interesting and safe online environment.</p>
                </div>
                <div className="main-container__right">
                </div>
            </section>
            <section className="cardd__wrap">
                <h2 className="cardd__main-title">Most Recent Services </h2>
                    <section className="cardd">
                        <Link to="#" className="cardd__link">
                            <h4 className="cardd__title">Carpentry</h4>
                            <img src={Carpentry} className="cardd__image" alt="Carpentry" />
                        </Link>

                        <Link to="#" className="cardd__link">
                            <h4 className="cardd__title">Plumbing</h4>
                            <img src={Plumbing} className="cardd__image" alt="Plumbing" />
                        </Link>

                        <Link to="#" className="cardd__link">
                            <h4 className="cardd__title">Electrician</h4>
                            <img src={Electrician} className="cardd__image" alt="Electrician" />
                        </Link>

                        {/* <Link to="#" className="cardd__link">
                            <h4 className="cardd__title">Mechanic</h4>
                            <img src={Mechanic} className="cardd__image" alt="Mechanic" />
                        </Link> */}
                    
                    </section>
            </section>
            <footer className="footer-wrap">
                    <span className="footer-wrap__content"> &copy; FindMe Inc. All Rights Reserved.</span>
            </footer>
            
        </>
    )
}

export default HomePage;




