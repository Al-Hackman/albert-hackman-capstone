import React, { useEffect, useState } from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import firebaseDb from 'firebase'
import AddService from '../AddService/AddService';
import ServiceProviderSignUp from '../ServiceProviderSignUp/ServiceProviderSignUp'
// import AddCategory from '../AddCategory/AddCategory'
// import { useEffect } from 'react'
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);





const ServiceList = () => {

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
                <tr key={index}>
                    <td>{s.service.companyName}</td>
                    <td>{s.service.address}</td>
                    <td>{s.service.city}</td>
                    <td>{s.service.postcode}</td>
                    <td>{s.service.rate}</td>
                    <td>{s.service.telephone}</td>
                    {/* <td>{a}</td> */}
                </tr>
            )
        }

        return (

            // const modal = <></>;
            // if (showModal) {
            // modal = <LoginModal />;
            // }
            <>
            {showModal ? <ServiceProviderSignUp /> : ''};
            {/* {showModal ? <AddCategory /> : <CategoryList />} */}
            {/* {sModal} */}

            
            <ReactBootStrap.Table>
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

export default ServiceList;