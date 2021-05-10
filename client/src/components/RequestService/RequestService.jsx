import React, { useEffect, useState } from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import firebaseDb from 'firebase'
import AddService from '../AddService/AddService';
import ServiceProviderSignUp from '../ServiceProviderSignUp/ServiceProviderSignUp'
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase'
import './requestService.scss'
import masonary from '../../assets/images/masonary.jpg'
import carpentry from '../../assets/images/carpentry.jpg'
import Dashboard from '../Dashboard/Dashboard'

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
               <>
              
                <Link to={'/app/request-service/'+s.id}  key={s.id} className="reqservice__link">
                <div className="reqservice__card">
                    <div className="reqservice__category-image">
                        <img src={s.service.categoryName.toLowerCase() === 'masonary' ? masonary : s.service.categoryName.toLowerCase() === 'carpentry' ? carpentry : ''} alt={ s.service.categoryName} className="reqservice__image"/>
                        <span className="reqservice__category-main">{ s.service.categoryName}</span> 
                    </div>
                    <div className="reqservice__title-wrap">
                        <span className="reqservice__name">{s.service.companyName}</span>
                        <span className="reqservice__category">{s.service.telephone}</span>
                        {/* <span className="reqservice__category">{ s.service.categoryName} </span> */}
                        <div className="reqservice__bottom-wrap">
                            <span className="reqservice__city">{s.service.city}</span>
                            <span className="reqservice__rate">{s.service.rate}/hr</span>
                        </div>
                        {/* <span className="service__category">{ catList.filter(c => { return c.id == s.service.id})}</span> */}
                    </div>
                </div>
                </Link>
                </>
            )
        }

        return (

            // const modal = <></>;
            // if (showModal) {
            // modal = <LoginModal />;
            // }
            <>
             <Dashboard />
            <div className="reqservice">
            {/* {showModal ? <ServiceProviderSignUp /> : ''}; */}
            {/* {showModal ? <AddCategory /> : <CategoryList />} */}
            {/* {sModal} */}
            <h1 className="reqservice__page-title">FindMe let's you request for Services in real time</h1>
            <span className="reqservice__sub-title">Search by Category or location to get the professional to help fix your issue here!</span>
            
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
             </div>
             </>
        
        );
}

export default RequestService;



