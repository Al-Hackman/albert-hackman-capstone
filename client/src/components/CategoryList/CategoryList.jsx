import React, { useEffect, useState } from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import firebaseDb from 'firebase'
import AddCategory from '../AddCategory/AddCategory.jsx';
// import AddCategory from '../AddCategory/AddCategory'
// import { useEffect } from 'react'
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);





const CategoryList = () => {

    const [todoList, setTodoList] = useState();
    const [showModal, setShowModal] = useState(false);


    const showModall = (event) => {
    event.preventDefault();
    setShowModal(true);
    <AddCategory />
     };

    //  const modal = <></>;
    //  const sModal = () => {
    //     // const modal = <></>;
    //     if (showModal) {
    //     return modal = <AddCategory />;
    // }
    // return modal = <AddCategory />;
    // }
     


    useEffect (() => { 
        const todoRef = firebaseDb.database().ref('serviceCategories/');
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            const todoList = []
            for (let id in todos){
                todoList.push(todos[id]);
            }
            setTodoList(todoList);
        });
    }, []);


    // const player =[

    //     {position:"Forward", name:"Lebron", team:"Lakers"},
    //     {position:"Forward", name:"Lebron", team:"Lakers"},
    //     {position:"Forward", name:"Lebron", team:"Lakers"},
    //     {position:"Forward", name:"Lebron", team:"Lakers"}
    // ]

        const renderCategory = (cat, index) => {
            return(
                <tr key={index}>
                    <td>{cat.title}</td>
                    <td>{cat.description}</td>
                </tr>
            )
        }

        return (

            // const modal = <></>;
            // if (showModal) {
            // modal = <LoginModal />;
            // }
            <>
            {showModal ? <AddCategory /> : ''};
            {/* {showModal ? <AddCategory /> : <CategoryList />} */}
            {/* {sModal} */}

            
            <ReactBootStrap.Table>
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                   {todoList ? todoList.map(renderCategory) :''}
                </tbody>
        </ReactBootStrap.Table>

            <button
              onClick={showModall}
              className="login__button"
            >
              log in
            </button>
            {/* {showModal} */}
             </>
        
        );
}

export default CategoryList;
