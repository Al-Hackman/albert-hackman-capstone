import React, { useEffect, useState } from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import firebaseDb from 'firebase'
import AddService from '../AddService/AddService';
import ServiceProviderSignUp from '../ServiceProviderSignUp/ServiceProviderSignUp'
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase'
// import AddCategory from '../AddCategory/AddCategory'
// import { useEffect } from 'react'
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);





const RequestService = () => {

    const [catList, setCatList] = useState();
    const [serviceList, setServiceList] = useState();
    const [showModal, setShowModal] = useState(false);


    const showModall = (event) => {
    event.preventDefault();
    setShowModal(true);
    <AddService />
     };

    //  const modal = <></>;
    //  const sModal = () => {
    //     // const modal = <></>;
    //     if (showModal) {
    //     return modal = <AddCategory />;
    // }
    // return modal = <AddCategory />;
    // }
     
    console.log('auth user', auth)


    useEffect (() => { 
        const catRef = firebaseDb.database().ref('serviceCategories/');
        catRef.on('value', (snapshot) => {
            const categories = snapshot.val();
            const catList = []
            for (let id in categories){
                catList.push({id: id, category: categories[id]});
            }
            setCatList(catList);
        });

        const serviceRef = firebaseDb.database().ref('serviceProviders/');
        serviceRef.on('value', (snapshot) => {
            const services = snapshot.val();
            const serviceList = []
            for (let id in services){
                serviceList.push({id: id, service: services[id]});
            }
            setServiceList(serviceList);
        });
    }, []);


    // const player =[

    //     {position:"Forward", name:"Lebron", team:"Lakers"},
    //     {position:"Forward", name:"Lebron", team:"Lakers"},
    //     {position:"Forward", name:"Lebron", team:"Lakers"},
    //     {position:"Forward", name:"Lebron", team:"Lakers"}
    // ]

        const renderService = (s, index) => {
            return(
               
                <Link to={'/app/request-service/'+s.id}  key={index}>
                <div className="service__card">
                    <div className="service__image"></div>
                    <div className="service__title-wrap">
                        <span className="service__name">{s.service.companyName}</span>
                        <span className="service__rate">{s.service.rate}</span>
                        <span className="service__category">{s.service.telephone}</span>
                        <span className="service__category">{ s.service.categoryName} </span>
                        {/* <span className="service__category">{ catList.filter(c => { return c.id == s.service.id})}</span> */}
                    </div>
                </div>
                </Link>
            )
        }

        return (

            // const modal = <></>;
            // if (showModal) {
            // modal = <LoginModal />;
            // }
            <>
            {/* {showModal ? <ServiceProviderSignUp /> : ''}; */}
            {/* {showModal ? <AddCategory /> : <CategoryList />} */}
            {/* {sModal} */}

            {serviceList ? serviceList.map(renderService) :''}
            {/* <ReactBootStrap.Table>
                <thead>
                    <tr>
                    <th>Company Name</th>
                    <th>Street Address</th>
                    <th>City</th>
                    <th>Postal Code</th>
                    <th>Rate/Hour</th>
                    <th>Telephone</th>
                    </tr>
                </thead>
                <tbody>
                   {serviceList ? serviceList.map(renderService) :''}
                </tbody>
        </ReactBootStrap.Table> */}

            {/* <button
              onClick={showModall}
              className="login__button"
            >
              log in
            </button> */}
            {/* {showModal} */}
             </>
        
        );
}

export default RequestService;



