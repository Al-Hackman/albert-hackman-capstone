import React, { useRef, useEffect, useState } from 'react';
import './serviceProviderSignUp.scss';
import firebaseDb from 'firebase'
import { auth } from '../../firebase';




function ServiceProviderSignUp() {


        const nameRef = useRef()
        const catRef = useRef()
        const postalcodeRef = useRef()
        const telephoneRef = useRef()
        const cityRef = useRef()
        const descriptionRef = useRef()
        const addressRef = useRef()
        const rateRef = useRef()
        const [todoList, setTodoList] = useState();
        const [error, setError] = useState('')
        const [loading, setLoading] = useState(false)


      useEffect (() => { 
        const todoRef = firebaseDb.database().ref('serviceCategories/');
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            console.log('todos', todos)
            const todoList = []
            for (let id in todos){
                console.log('id', id)
                todoList.push({id: id, todo: todos[id]});
            }
            console.log('todolist', todoList)
            console.log("auth", auth)
            setTodoList(todoList);
        });
    }, []);


        const renderCategory = (cat, index) => {
            console.log('cat', cat)
            return(
                <option value={cat.id + '+' + cat.todo.title} ref={catRef} key={index}>{cat.todo.title}</option>
            )
        }


        const handleAddService = (e) => {
        e.preventDefault()
            console.log('event catname', e.currentTarget.getAttribute('categoryname'))
        try {
            setError("")
            setLoading(true)
            // signup(emailRef.current.value, passwordRef.current.value, lastNameRef.current.value, otherNamesRef.current.value, telephoneRef.current.value)
            firebaseDb.database().ref('serviceProviders').push({
                userId: auth.currentUser.uid,
                categoryName: catRef.current.value.split('+')[1],
                categoryId: catRef.current.value.split('+')[0],
                companyName: nameRef.current.value,
                telephone: telephoneRef.current.value,
                address: addressRef.current.value,
                city: cityRef.current.value,
                postcode: postalcodeRef.current.value,
                rate: rateRef.current.value,
                description: descriptionRef.current.value
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
        <section className="sign-up-sp">
            <div className="sign-up-sp__wrap">
                <h1 className="sign-up-sp__title">ADD SERVICE</h1>
                <div className="sign-up-sp__form-wrap">
                    <form onSubmit={handleAddService} className= "sign-up-sp__form" encType="multipart/form-data">
                        <div className="sign-up-sp__display-wrap">
                            <div className="sign-up-sp__input-wrap">
                                <label className="sign-up-sp__label" for="services">Select Type of Service</label>
                                <select className="sign-up-sp__input" name="services">
                                    {todoList ? todoList.map(renderCategory) :''}
                                </select>
                            </div>
                            <div className="sign-up-sp__input-wrap">
                                <label className="sign-up-sp__label">Company Name</label>
                                <input type="text" className="sign-up-sp__input" ref={nameRef} placeholder="company name"/>
                            </div>
                        </div>
                        <div className="sign-up-sp__display-wrap">
                            <div className="sign-up-sp__input-wrap">
                                <label className="sign-up-sp__label">Address (Street # and Name)</label>
                                <input type="text" className="sign-up-sp__input" ref={addressRef} placeholder="street number and street name"/>
                            </div>
                            <div className="sign-up-sp__input-wrap">
                                <label className="sign-up-sp__label">City</label>
                                <input type="text" className="sign-up-sp__input" ref={cityRef} placeholder="city"/>
                            </div>
                        </div>
                        <div className="sign-up-sp__display-wrap">
                            <div className="sign-up-sp__input-wrap">
                                <label className="sign-up-sp__label">Postal Code</label>
                                <input type="text" className="sign-up-sp__input" ref={postalcodeRef} placeholder="postal code"/>
                            </div>
                            <div className="sign-up-sp__input-wrap">
                                <label className="sign-up-sp__label">Telephone Number</label>
                                <input type="text" className="sign-up-sp__input" ref={telephoneRef} placeholder="telephone number"/>
                            </div>
                        </div><div className="sign-up-sp__display-wrap">
                            <div className="sign-up-sp__input-wrap">
                                <label className="sign-up-sp__label">Hourly Rate</label>
                                <input type="text" className="sign-up-sp__input" ref={rateRef} placeholder="rate/hour"/>
                            </div>
                            <div className="sign-up-sp__input-wrap">
                                <label className="sign-up-sp__label">Description</label>
                                <input type="text" className="sign-up-sp__input" ref={descriptionRef} placeholder="describe the service"/>
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
 