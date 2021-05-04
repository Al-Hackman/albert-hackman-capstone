import React from 'react';
import './homePage.scss';
import { Link } from 'react-router-dom';



function HomePage() {
    return (
        <>  
            <section className="hero">
                <h1 className="hero__title">Welcome to FindMe</h1>
                <div className="hero__sub-title">Let's Chat</div>
                <div className="hero__action">Book Now</div>
            </section>

            <section className="main-container">
                <div className="main-container__left">
                    <h4 className="main-container__title">About Us</h4>
                    <p className="main-container__content">The main discussion topics at FindMe often pave the way to surprising and unexpected conversations 
                    thanks to our engaged forum users. Our Forum is dedicated to enhancing the forum experience by offering plenty of opportunities for users 
                    to engage with each other in an interesting and safe online environment.</p>
                </div>
                <div className="main-container__right">
                </div>
            </section>
            <section className="card__services">
                <div className="card">
                    <h4 className="card__title">Carpentry</h4>
                    <div className="card__bar">
                        <div className="card__emptybar"></div>
                        <div className="card__filledbar"></div>
                    </div>
                    <Link to="/book-now" className="card__main card__carpenter"></Link>
                </div>
                <div className="card">
                    <h4 className="card__title">Auto Mechanic</h4>
                    <div className="card__bar">
                        <div className="card__emptybar"></div>
                        <div className="card__filledbar"></div>
                    </div>
                    <Link to="/book-now" className="card__main card__automechanic"></Link>
                </div>
                <div className="card">
                    <h4 className="card__title">Lawn Keeper</h4>
                    <div className="card__bar">
                        <div className="card__emptybar"></div>
                        <div className="card__filledbar"></div>
                    </div>
                    <Link to="/book-now" className="card__main card__lawnkeeper"></Link>
                </div>
                <div className="card">
                    <h4 className="card__title">Electrician</h4>
                    <div className="card__bar">
                        <div className="card__emptybar"></div>
                        <div className="card__filledbar"></div>
                    </div>
                    <Link to="/book-now" className="card__main card__electrician"></Link>
                </div>
                <div className="card">
                    <h4 className="card__title">Dry Wall</h4>
                    <div className="card__bar">
                        <div className="card__emptybar"></div>
                        <div className="card__filledbar"></div>
                    </div>
                    <Link to="/book-now" className="card__main card__drywall"></Link>
                </div>
            </section>
            
        </>
    )
}

export default HomePage;
