import React from 'react';
import './signUp.scss';



function SignUp() {

    return (
        <section className="sign-up">
            <div className="sign-up__wrap">
                <h1 className="sign-up__title">SIGN UP TO GET STARTED</h1>
                <div className="sign-up__form-wrap">
                    <form className= "sign-up__form">
                        <div className="sign-up__display-wrap">
                            <div className="sign-up__input-wrap">
                                <label className="sign-up__label">Last Name</label>
                                <input type="text" className="sign-up__input" placeholder="last Name"/>
                            </div>
                            <div className="sign-up__input-wrap">
                                <label className="sign-up__label">Other Names</label>
                                <input type="text" className="sign-up__input" placeholder="other Names"/>
                            </div>
                        </div>
                        <div className="sign-up__display-wrap">
                            <div className="sign-up__input-wrap">
                                <label className="sign-up__label">Email</label>
                                <input type="text" className="sign-up__input" placeholder="email@findme.com"/>
                            </div>
                            <div className="sign-up__input-wrap">
                                <label className="sign-up__label">Phone Number</label>
                                <input type="text" className="sign-up__input" placeholder="phone Number"/>
                            </div>
                        </div>
                        <div className="sign-up__display-wrap">
                            <div className="sign-up__input-wrap">
                                <label className="sign-up__label">Password</label>
                                <input type="password" className="sign-up__input" placeholder="password"/>
                            </div>
                            <div className="sign-up__input-wrap">
                                <label className="sign-up__label">Re-Enter Password</label>
                                <input type="password" className="sign-up__input" placeholder="re-enter Password"/>
                            </div>
                        </div>
                        <label className="sign-up__checkbox">
                            <input className="sign-up__input-check" type="checkbox" name="checkbox" defaultChecked/>
                            Please send me offers and news from FindMe</label>
                        <button className="sign-up__btn" type="submit" value="Submit">SUBMIT</button>
                        <button className="sign-up__cancel" type="reset" value="Reset">CANCEL</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignUp;
