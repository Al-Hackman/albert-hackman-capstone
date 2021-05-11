import ReactDOM from "react-dom";
import firebaseDb from 'firebase';
import CRUDTable, { Fields, Field, CreateForm, UpdateForm, DeleteForm } from "react-crud-table";
import './addCategory.scss';
import React, { useRef, useState } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import CategoryList from '../CategoryList/CategoryList';


function AddCategory(props) {

    const titleRef = useRef()
    const descriptionRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    // const [showModal, setShowModal] = useState(true);



    // function showModall() {
    // // event.preventDefault();
    // // setShowModal(false);
    // // <CategoryList />
    //  };


    const handleAddCategory = (e) => {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            // setShowModal(true)
            // signup(emailRef.current.value, passwordRef.current.value, lastNameRef.current.value, otherNamesRef.current.value, telephoneRef.current.value)
            firebaseDb.database().ref('serviceCategories/').push({
                title: titleRef.current.value,
                description: descriptionRef.current.value
            }).then(task=>{
                    // setShowModal(false);
                    history.push("/app/categories")
                    console.log('task details added', task)
                }).catch(err => {{
                    console.log('task details err', err)
                }})
            // history.push("/app/categories")
            
        } catch {
            setError('Failed to create an Account')
        } 

        // setLoading(false);    
        
        // setShowModal(false);
        // showModall();
        // props.history.push();
    }
    

    return (
        
        <section className="addCat">
            {/* {!showModal ? <CategoryList /> : null}  */}
            <div className="addCat__wrap">
                <h1 className="addCat__title">Add Category</h1>
                <div className="addCat__form-wrap">
                    <form onSubmit={handleAddCategory} className= "addCat__form" encType="multipart/form-data">
                        <h4 className="addCat__error-message">{error}</h4>
                        <div className="addCat__display-wrap">
                            <div className="addCat__input-wrap">
                                <label className="addCat__label">Title</label>
                                <input type="text" className="addCat__input" ref={titleRef} placeholder="Title"/>
                            </div>
                            <div className="addCat__input-wrap">
                                <label className="addCat__label">Description</label>
                                <textarea rows="3" className="addCat__textarea" ref={descriptionRef} placeholder="Description"></textarea>
                            </div>
                        </div>
                        
                        <button className="addCat__btn" type="submit" value="Submit" disabled={loading}>ADD CATEGORY</button>
                        {/* <button className="sign-up__cancel" type="reset" value="Reset">CANCEL</button> */}
                    </form>
                </div>
            </div>
        </section>
    )
}


export default AddCategory;







