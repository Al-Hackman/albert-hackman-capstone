import { auth } from '../../firebase'
import React, { useRef, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase'
import * as ReactBootStrap from 'react-bootstrap';
// import './serviceProvided.scss'
import Dashboard from '../Dashboard/Dashboard';



function ClientRequestedServices() {





    // const [requestedList, setrequestedList] = useState();
    const [showModal, setShowModal] = useState(false);
    const [requestedList, setRequestedList] = useState()
    const serviceRequestedRef = firebase.database().ref('requestedService');
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
     
    // const rootRef = firebase.().ref();
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
        // const serviceRequestedRef = firebase.database().ref('requestedService');

        serviceRequestedRef.on('value', (snapshot) => {
            const requests = snapshot.val();
            let thisList = []
            for (let id in requests){
                thisList.push({id: id, service: requests[id]});
            }
            let filteredthisList = thisList.filter(s => {
                return s.service.requestedById == auth.currentUser.uid
            })
            console.log('filteredthisList...', filteredthisList)
             
            setRequestedList(filteredthisList);
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
            "status": "Accept"
        }).then(service=> {
            handleMailTo('this is just a test', 'panfohack@gmail.com', 'Testing MailTo')
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
                    <td>{service.service.status == 'Accepted' ? <span className="client-request__accepted">{service.service.status}</span> : service.service.status == 'Rejected' ? <span className="client-request__rejected">{service.service.status}</span> : <span className="client-request__pending">{service.service.status}</span>}</td>
                    <td><button onClick={() => handleAccept(service)}>Accept</button></td>
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
                    <th>Requested Person</th>
                    <th>Requested Person Address</th>
                    <th>Requested Person Telephone Number</th>
                    <th>Description of Work</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {requestedList ? requestedList.map(renderCategory) :null}
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
        </>
        
        );
}

export default ClientRequestedServices;



