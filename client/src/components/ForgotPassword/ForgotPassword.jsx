import React, { useRef, useState } from 'react';
import './forgotPassword.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';




function ForgotPassword() {

    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
   

    const handleSubmit = (e) => {
        e.preventDefault()

        
        try {
            setMessage('')
            setError("")
            setLoading(true)
            resetPassword(emailRef.current.value)
            setMessage('Password Reset Instructions has been sent to your Email')
        } catch {
            setError('Password Reset Failed')
        } 

        setLoading(false)       
    }



    return (
         <section className="forgot-password">
            <div className="forgot-password__wrap">
                <h1 className="forgot-password__title">FORGOT PASSWORD?</h1>
                <div className="forgot-password__form-wrap">
                    <form onSubmit={handleSubmit}  className= "forgot-password__form" encType="multipart/form-data">
                        <h4 className="forgot-password__error-message">{error}</h4>
                        <label className="forgot-password__label">Email</label>
                        <input type="email" className="forgot-password__input" ref={emailRef} placeholder="email@findme.com"/>
                        <p className="forgot-password__note">No problem! Enter the email address associated with your account and we'll email you password reset instructions.</p>
                        <button className="forgot-password__btn" type="submit" value="Submit">Reset Password</button>
                        <button className="forgot-password__cancel" type="reset" value="Reset">CANCEL</button>
                        
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword;
