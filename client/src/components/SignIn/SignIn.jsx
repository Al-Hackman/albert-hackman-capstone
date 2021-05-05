import React, { useRef, useState } from 'react';
import './signIn.scss';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';



function SignIn() {


    const emailRef = useRef()
    const passwordRef = useRef()
    const { signin } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault()

        
        try {
            setError("")
            setLoading(true)
            signin(emailRef.current.value, passwordRef.current.value)
            history.push("/users/dashboard")
        } catch {
            setError('Failed, please check email and password')
        } 

        setLoading(false)       
    }



    return (
        <section className="sign-in">
            <div className="sign-in__wrap">
                <h1 className="sign-in__title">LOGIN HERE</h1>
                <div className="sign-in__form-wrap">
                    <form onSubmit={handleSubmit}  className= "sign-in__form" encType="multipart/form-data">
                        <label className="sign-in__label">Email</label>
                        <input type="email" className="sign-in__input" ref={emailRef}placeholder="email@findme.com"/>
                        <label className="sign-in__label">Password</label>
                        <input type="password" className="sign-in__input" ref={passwordRef} placeholder="password"/>
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
