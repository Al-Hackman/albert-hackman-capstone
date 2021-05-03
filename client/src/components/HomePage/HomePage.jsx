import React from 'react';
import './homePage.scss';






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
            
        </>
    )
}

export default HomePage;
