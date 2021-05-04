import React from 'react';
import './signIn.scss';
import { Link } from 'react-router-dom';



function SignIn() {
    return (
        <section className="sign-in">
            <div className="sign-in__wrap">
                <h1 className="sign-in__title">LOGIN HERE</h1>
                <div className="sign-in__form-wrap">
                    <form className= "sign-in__form">
                        <label className="sign-in__label">Email</label>
                        <input type="text" className="sign-in__input" placeholder="email@findme.com"/>
                        <label className="sign-in__label">Password</label>
                        <input type="password" className="sign-in__input" placeholder="password"/>
                        <label className="sign-in__checkbox">
                            <input className="sign-in__input-check" type="checkbox" name="checkbox" defaultChecked/>
                            Keep me Logged In</label>
                        <button className="sign-in__btn">LOGIN</button>
                        <div className="sign-in__bottom">
                            <Link to="/users/new-password" className="sign-in__link forgot-pwd">Forgot Password?</Link>
                            <Link to="/users/sign-up" className="sign-in__link signup">Sign Up</Link>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignIn;
