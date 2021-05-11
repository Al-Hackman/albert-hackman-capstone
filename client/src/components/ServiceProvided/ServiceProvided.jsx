// import React from 'react'
import { auth } from '../../firebase'
import React, { useRef, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase'
import * as ReactBootStrap from 'react-bootstrap';
import './serviceProvided.scss'
import Dashboard from '../Dashboard/Dashboard';



function ServiceProvided() {


    // const [requestedList, setrequestedList] = useState();
    const [showModal, setShowModal] = useState(false);
    const [requestedList, setRequestedList] = useState()
    const serviceRequestedRef = firebase.database().ref('requestedService');
    const showModall = (event) => {
    event.preventDefault();
    setShowModal(true);
    // <AddCategory />
     };


   

    useEffect (() => { 

        // {getAllRequestedService('-M_BOMBSIgVLdu7wbJml', snap => console.log('all service requests', snap.val()))}
        // const serviceRequestedRef = firebase.database().ref('requestedService');

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


    function handleAccept (service) {
        // e.preventDefault()

        serviceRequestedRef.child(`${service.id}`).update({
            "status": "Accepted"
        }).catch(err=>{
            console.log('err accepting')
        })

    }

    // .then(service=> {
    //         handleMailTo('this is just a test', 'panfohack@gmail.com', 'Testing MailTo')
    //     })

    
      function handleReject (service) {
        // e.preventDefault()

        serviceRequestedRef.child(`${service.id}`).update({
            "status": "Rejected"
        }).catch(err=>{
            console.log('err accepting')
        })  

    }




    function handleMailTo(body_message, email, subject){
        var body_message = body_message;
        var email = email;
        var subject = subject;
        // $('button').click(function() {

        var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + body_message;

        let win = window.open(mailto_link, 'emailWindow');
        if (win && win.open && !win.closed) win.close();

// });
    }


          const renderCategory = (service, index) => {
            return(
                <tr key={index}>
                    <td>{service.service.date}</td>
                    <td>{service.service.requestedByFullName}</td>
                    <td>{service.service.requestedByAddress}</td>
                    <td>{service.service.requestedByTelephone}</td>
                    <td>{service.service.description}</td>
                    <td>{service.service.status == 'Accepted' ? <span className="service-provided__accepted">{service.service.status}</span> : service.service.status == 'Rejected' ? <span className="service-provided__rejected">{service.service.status}</span> : <span className="service-provided__pending">{service.service.status}</span>}</td>
                    <td><button onClick={() => handleAccept(service)} className="service-provided__button">Accept</button><button onClick={() => handleReject(service)} className="service-provided__button">Reject</button></td>
                </tr>
            )
        }


    return (
   
        <>

            <Dashboard />
            <div className="table-responsive service-provided">
            {/* {showModal ? <AddCategory /> : ''}; */}
            
            <h2 className="service-provided__title">List of Requested Services:</h2>
            <ReactBootStrap.Table className= "table table-hover table-striped service-provided__table" >
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Telephone</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {requestedList ? requestedList.map(renderCategory) :null}
                </tbody>
            </ReactBootStrap.Table>

            {/* <button
              onClick={showModall}
              className="login__button"
            >
              log in
            </button> */}
            {/* {showModal} */}
            </div>
        </>
        
        );
}

export default ServiceProvided;




