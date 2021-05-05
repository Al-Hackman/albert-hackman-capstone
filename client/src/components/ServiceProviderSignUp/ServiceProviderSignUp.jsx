import React from 'react';
import './serviceProviderSignUp.scss';




function ServiceProviderSignUp() {
    return (
        <section className="sign-up-sp">
            <div className="sign-up-sp__wrap">
                <h1 className="sign-up-sp__title">SIGN UP TO OFFER SERVICES</h1>
                <div className="sign-up-sp__form-wrap">
                    <form className= "sign-up-sp__form">
                        <div className="sign-up-sp__display-wrap">
                            <div className="sign-up-sp__input-wrap">
                                <label className="sign-up-sp__label" for="services">Select Type of Service</label>
                                <select className="sign-up-sp__input" name="services">
                                    <option value="carpentry">Carpentry</option>
                                    <option value="auto-mechanic">Auto-Mechanic</option>
                                    <option value="electrician">Electrician</option>
                                    <option value="plumbing">Plumbing</option>
                                    <option value="gardener">Gardener</option>
                                </select>
                            </div>
                            <div className="sign-up-sp__input-wrap">
                                <label className="sign-up-sp__label">Company Name</label>
                                <input type="text" className="sign-up-sp__input" placeholder="company name"/>
                            </div>
                        </div>
                        <div className="sign-up-sp__display-wrap">
                            <div className="sign-up-sp__input-wrap">
                                <label className="sign-up-sp__label">Address (Street # and Name)</label>
                                <input type="text" className="sign-up-sp__input" placeholder="street number and street name"/>
                            </div>
                            <div className="sign-up-sp__input-wrap">
                                <label className="sign-up-sp__label">City</label>
                                <input type="text" className="sign-up-sp__input" placeholder="city"/>
                            </div>
                        </div>
                        <div className="sign-up-sp__display-wrap">
                            <div className="sign-up-sp__input-wrap">
                                <label className="sign-up-sp__label">Postal Code</label>
                                <input type="text" className="sign-up-sp__input" placeholder="postal code"/>
                            </div>
                            <div className="sign-up-sp__input-wrap">
                                <label className="sign-up-sp__label">Telephone Number</label>
                                <input type="text" className="sign-up-sp__input" placeholder="telephone number"/>
                            </div>
                        </div>
                        <label className="sign-up-sp__checkbox">
                            <input className="sign-up-sp__input-check" type="checkbox" name="checkbox" defaultChecked/>
                            Agree to the terms and conditons of FindMe</label>
                        <button className="sign-up-sp__btn" type="submit" value="Submit">SUBMIT</button>
                        <button className="sign-up-sp__cancel" type="reset" value="Reset">CANCEL</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ServiceProviderSignUp;
 