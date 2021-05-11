import React, { useRef, useState } from 'react';
import './signUp.scss';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';




function SignUp() {

    const lastNameRef = useRef()
    const otherNamesRef = useRef()
    const emailRef = useRef()
    const telephoneRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const addressRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }

        try {
            setError("")
            setLoading(true)
            signup(emailRef.current.value, passwordRef.current.value, lastNameRef.current.value, otherNamesRef.current.value, telephoneRef.current.value, addressRef.current.value)
            history.push("/users/dashboard")
        } catch {
            setError('Failed to create an Account')
        } 

        setLoading(false)       
    }


    return (
    
       
        <section className="sign-up">
            <div className="sign-up__wrap">
                <h1 className="sign-up__title">SIGN UP TO GET STARTED</h1>
                <div className="sign-up__form-wrap">
                    <form onSubmit={handleSubmit} className= "sign-up__form" encType="multipart/form-data">
                        <h4 className="sign-up__error-message">{error}</h4>
                        <div className="sign-up__display-wrap">
                            <div className="sign-up__input-wrap">
                                <label className="sign-up__label">Last Name</label>
                                <input type="text" className="sign-up__input" ref={lastNameRef} placeholder="last Name"/>
                            </div>
                            <div className="sign-up__input-wrap">
                                <label className="sign-up__label">Other Names</label>
                                <input type="text" className="sign-up__input" ref={otherNamesRef} placeholder="other Names"/>
                            </div>
                        </div>
                        <div className="sign-up__display-wrap">
                            <div className="sign-up__input-wrap">
                                <label className="sign-up__label">Email</label>
                                <input type="email" className="sign-up__input" ref={emailRef} required placeholder="email@findme.com"/>
                            </div>
                            <div className="sign-up__input-wrap">
                                <label className="sign-up__label">Phone Number</label>
                                <input type="text" className="sign-up__input" ref={telephoneRef} placeholder="phone Number"/>
                            </div>
                        </div>
                        <div className="sign-up__display-wrap">
                            <div className="sign-up__input-wrap">
                                <label className="sign-up__label">Password</label>
                                <input type="password" className="sign-up__input" ref={passwordRef} required placeholder="password"/>
                            </div>
                            <div className="sign-up__input-wrap">
                                <label className="sign-up__label">Re-Enter Password</label>
                                <input type="password" className="sign-up__input" ref={passwordConfirmRef} required placeholder="re-enter Password"/>
                            </div>
                        </div>
                        <div className="sign-up__display-wrap">
                            <div className="sign-up__input-wrap">
                                <label className="sign-up__label">Address</label>
                                <input type="text" className="sign-up__input sign-up__address" ref={addressRef} required placeholder="address"/>
                            </div>
                        </div>
                        <label className="sign-up__checkbox">
                            <input className="sign-up__input-check" type="checkbox" name="checkbox" defaultChecked/>
                            Please send me offers and news from FindMe</label>
                        <button className="sign-up__btn" type="submit" value="Submit" disabled={loading}>SUBMIT</button>
                        <button className="sign-up__cancel" type="reset" value="Reset">CANCEL</button>
                    </form>
                </div>
            </div>
        </section>
    
    )
}

export default SignUp;





