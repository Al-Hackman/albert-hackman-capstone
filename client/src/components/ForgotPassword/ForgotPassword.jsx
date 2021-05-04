import React from 'react';
import './forgotPassword.scss';
import { Link } from 'react-router-dom';




function ForgotPassword() {
    return (
         <section className="forgot-password">
            <div className="forgot-password__wrap">
                <h1 className="forgot-password__title">FORGOT PASSWORD?</h1>
                <div className="forgot-password__form-wrap">
                    <form className= "forgot-password__form">
                        <label className="forgot-password__label">Email</label>
                        <input type="text" className="forgot-password__input" placeholder="email@findme.com"/>
                        <p className="forgot-password__note">No problem! Enter the email address associated with your account and we'll email you password reset instructions.</p>
                        <button className="forgot-password__btn" type="submit" value="Submit">SUBMIT</button>
                        <button className="forgot-password__cancel" type="reset" value="Reset">CANCEL</button>
                        
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword;
