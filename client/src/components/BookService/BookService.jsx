import { auth } from '../../firebase'
import React, { useRef, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import firebaseDb from 'firebase';
import './bookService.scss';




function BookService(props) {


    const datetimeRef = useRef()
    const descriptionRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    const handleBookService = (e) => {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            // signup(emailRef.current.value, passwordRef.current.value, lastNameRef.current.value, otherNamesRef.current.value, telephoneRef.current.value)
            firebaseDb.database().ref('requestedService').push({
                date: datetimeRef.current.value,
                description: descriptionRef.current.value,
                status:"pending",
                serviceProviderId: props.match.params.id,
                requestedById: auth.currentUser.uid
            }).then(task=>{
                    console.log('task details added', task)
                }).catch(err => {{
                    console.log('task details err', err)
                }})
            // history.push("/users/dashboard")
            
        } catch {
            setError('Failed to create an Account')
        } 

        setLoading(false)       
    }
    

    return (

            
                // <form onSubmit={handleBookService}>
                //     <label htmlFor=""> Date </label>
                //     <input type="datetime-local" ref={datetimeRef} />
                //     <label htmlFor="">Description </label>
                //     <textarea rows="3" name="" ref={descriptionRef} ></textarea>
                //     <button type="submit">Book Service</button>
                //     {/* <label htmlFor=""></label>
                //     <input type="text" /> */}
                // </form>



            <div className="book__wrap">
                <h1 className="book__title">Book this Service</h1>
                <div className="book__form-wrap">
                    <form onSubmit={handleBookService} className= "book__form" encType="multipart/form-data">
                        <h4 className="book__error-message">{error}</h4>
                        <div className="book__display-wrap">
                            
                                <label className="book__label">Date</label>
                                <input type="datetime-local" className="book__input" ref={datetimeRef} />
                           
                            
                                <label className="book__label">Description</label>
                                <textarea rows="3" className="book__textarea" ref={descriptionRef} placeholder="Description"></textarea>
             
                        </div>
                        
                        <button className="book__btn" type="submit" value="Submit" disabled={loading}>ADD CATEGORY</button>
                        {/* <button className="sign-up__cancel" type="reset" value="Reset">CANCEL</button> */}
                    </form>
                </div>
            </div> 


    )
}

export default BookService;
