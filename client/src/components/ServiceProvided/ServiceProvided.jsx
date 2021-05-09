// import React from 'react'
import { auth } from '../../firebase'
import React, { useRef, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase'
import * as ReactBootStrap from 'react-bootstrap'




function ServiceProvided() {


    const [todoList, setTodoList] = useState();
    const [showModal, setShowModal] = useState(false);
    const [requestedList, setRequestedList] = useState()

    const showModall = (event) => {
    event.preventDefault();
    setShowModal(true);
    // <AddCategory />
     };


    //  const modal = <></>;
    //  const sModal = () => {
    //     // const modal = <></>;
    //     if (showModal) {
    //     return modal = <AddCategory />;
    // }
    // return modal = <AddCategory />;
    // }
     
    const rootRef = firebase.database().ref();
        const serviceRequestedRef = rootRef.child('requestedService');
        const usersRef = rootRef.child('users')

     function getAllRequestedService(key, cb){
         console.log('function call')
         serviceRequestedRef.child(key).on('child_added', snap => {

             console.log('in..........', snap.key)
             let userRef = usersRef.child(snap.key)
             userRef.once('value', cb)
         })

     }
    //  getAllRequestedService('-M_CV99nlV1ieWpQPa_q', snap => console.log('all service requests', snap.val()))

    useEffect (() => { 

        {getAllRequestedService('-M_BOMBSIgVLdu7wbJml', snap => console.log('all service requests', snap.val()))}
        
        serviceRequestedRef.child('value', (snapshot) => {
            const reqService = snapshot.val();
            console.log('reqService', reqService)
            let userRef = userRef.child(reqService)
            console.log('details', userRef)
            // const todoList = []
            // for (let id in todos){
            //     todoList.push(todos[id]);
            // }
            setRequestedList(requestedList);
        });
    }, []);


          const renderCategory = (cat, index) => {
            return(
                <tr key={index}>
                    <td>{cat.title}</td>
                    <td>{cat.description}</td>
                    <td>{cat.description}</td>
                    <td>{cat.description}</td>
                    <td>{cat.description}</td>
                    <td>{cat.description}</td>
                </tr>
            )
        }


    return (
   
            <>
            {/* {showModal ? <AddCategory /> : ''}; */}
            
            
            <ReactBootStrap.Table>
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Requested Person</th>
                    <th>Requested Person Address</th>
                    <th>Requested Person Telephone Number</th>
                    <th>Description of Work</th>
                    <th>Status</th>
                    <th>Action</th>
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

export default ServiceProvided;
