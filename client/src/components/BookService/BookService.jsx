import { auth } from '../../firebase'
import React, { useRef, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import firebaseDb from 'firebase'




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
        <section>
                <form onSubmit={handleBookService}>
                    <label htmlFor=""> Date </label>
                    <input type="datetime-local" ref={datetimeRef} />
                    <label htmlFor="">Description </label>
                    <textarea rows="3" name="" ref={descriptionRef} ></textarea>
                    <button type="submit">Book Service</button>
                    {/* <label htmlFor=""></label>
                    <input type="text" /> */}
                </form>
        </section>
    )
}

export default BookService;
