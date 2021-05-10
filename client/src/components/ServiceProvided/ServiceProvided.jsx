// import React from 'react'
import { auth } from '../../firebase'
import React, { useRef, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase'
import * as ReactBootStrap from 'react-bootstrap'
import './serviceProvided.scss'




function ServiceProvided() {


    // const [requestedList, setrequestedList] = useState();
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
     
    // const rootRef = firebase.database().ref();
    //     const serviceRequestedRef = rootRef.child('requestedService');
    //     const usersRef = rootRef.child('users')

    //  function getAllRequestedService(key, cb){
    //      console.log('function call')
    //      serviceRequestedRef.child(key).on('child_added', snap => {

    //          console.log('in..........', snap.key)
    //          let userRef = usersRef.child(snap.key)
    //          userRef.once('value', cb)
    //      })

    //  }
    //  getAllRequestedService('-M_CV99nlV1ieWpQPa_q', snap => console.log('all service requests', snap.val()))

    useEffect (() => { 

        // {getAllRequestedService('-M_BOMBSIgVLdu7wbJml', snap => console.log('all service requests', snap.val()))}
        const serviceRequestedRef = firebase.database().ref('requestedService');

        serviceRequestedRef.on('value', (snapshot) => {
            const requests = snapshot.val();
            let thisList = []
            for (let id in requests){
                thisList.push({id: id, service: requests[id]});
            }
            // thisList = servicethisList.filter(s => {
            //     return s.id == props.match.params.id
            // })
            console.log('requested list...', thisList)
             
            setRequestedList(thisList);
        });

        // serviceRequestedRef.child('value', (snapshot) => {
        //     const reqService = snapshot.val();
        //     console.log('reqService', reqService)
        //     let userRef = userRef.child(reqService)
        //     console.log('details', userRef)
        //     // const todoList = []
        //     // for (let id in todos){
        //     //     todoList.push(todos[id]);
        //     // }
        //     setRequestedList(requestedList);
        // });
    }, []);


          const renderCategory = (service, index) => {
            return(
                <tr key={index}>
                    <td>{service.service.date}</td>
                    <td>{service.service.requestedByFullName}</td>
                    <td>{service.service.address +' '+ service.service.city}</td>
                    <td>{service.service.requestedByTelephone}</td>
                    <td>{service.service.description}</td>
                    <td>{service.service.status}</td>
                </tr>
            )
        }


    return (
   
            <div className="table-responsive service-provided">
            {/* {showModal ? <AddCategory /> : ''}; */}
            
            
            <ReactBootStrap.Table className= "table table-hover table-striped service-provided__table" >
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
                   {requestedList ? requestedList.map(renderCategory) :''}
                </tbody>
            </ReactBootStrap.Table>

            <button
              onClick={showModall}
              className="login__button"
            >
              log in
            </button>
            {/* {showModal} */}
            </div>
        
        );
}

export default ServiceProvided;
