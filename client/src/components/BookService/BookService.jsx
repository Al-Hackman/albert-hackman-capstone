import { auth } from '../../firebase'
import React, { useRef, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import firebaseDb from 'firebase';
import './bookService.scss';
import { RiSoundModuleLine } from 'react-icons/ri';




function BookService(props) {


    const datetimeRef = useRef()
    const descriptionRef = useRef()
    const addressRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [serviceList, setServiceList] = useState();
    const [catList, setCatList] = useState();
    const [thisUser, setThisUser] = useState();
    const history = useHistory()

    


    function getUserData(uid) {
    firebaseDb.database().ref('users/' + uid).on("value", snap => {
        console.log('user data',snap.val())
        const userList = []
        for (let id in snap.val()){
            userList.push({id: id, user: snap.val()[id]})
        }
        console.log('this user', userList)
        setThisUser(userList)
    })
}

    useEffect (() => { 

        // get logged in users details
      firebaseDb.auth().onAuthStateChanged(user => {
            // console.log('user', user)
            if (user) {
                
                getUserData(user.uid)
            }
        })

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
        // const snapshot = await serviceRef.where('id', '==', props.match.params.id).get();
        // if (snapshot.empty) {
        //     console.log('No matching documents.');
        // return;
        // } 
        // snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.data());
        // });
        serviceRef.on('value', (snapshot) => {
            const services = snapshot.val();
            let servicethisList = []
            for (let id in services){
                servicethisList.push({id: id, service: services[id]});
            }
            servicethisList = servicethisList.filter(s => {
                return s.id == props.match.params.id
            })
            console.log('selected service', servicethisList)
             
            setServiceList(servicethisList);
        });
    }, []);



    const handleBookService = (e) => {
        e.preventDefault()

            console.log("")
        // try {
            setError("")
            setLoading(true)
            // signup(emailRef.current.value, passwordRef.current.value, lastNameRef.current.value, otherNamesRef.current.value, telephoneRef.current.value)
            firebaseDb.database().ref('requestedService/').push({
                createdDate: Date.now(),
                date: datetimeRef.current.value,
                description: descriptionRef.current.value,
                // address: addressRef.current.value,
                status:"pending",
                serviceProviderId: props.match.params.id,
                serviceProviderCompanyName: serviceList[0].service.companyName,
                serviceProviderCity: serviceList[0].service.city,
                serviceProviderTelephone: serviceList[0].service.telephone,
                serviceProviderPostcode: serviceList[0].service.postcode,
                serviceProviderRate: serviceList[0].service.rate,
                serviceProviderAddress: serviceList[0].service.address,
                serviceProviderDescription: serviceList[0].service.description,
                requestedById: auth.currentUser.uid,
                serviceProviderCategory: serviceList[0].service.categoryName,
                requestedByFullName:  thisUser[0].user.userLastName +' '+ thisUser[0].user.userOtherNames,
                requestedByTelephone: thisUser[0].user.userTelephone,
                requestedByAddress: thisUser[0].user.userAddress
                // requestedByCity: thisUser[0].user.userCity,

            }).then(task=>{
                    console.log('task details added', task)
                }).catch(err => {{
                    console.log('task details err', err)
                }})
            // history.push("/users/dashboard")
            
        // } catch {
        //     setError('Failed to Book an Account')
        // } 

        setLoading(false)    
        
        e.target.reset();
        
    }
    

    return (

        <>
            <div className="book__wrap">
                <h1 className="book__title">Book this Service</h1>
                {/* <p>{serviceList['0'].categoryName}</p> */}
                <div className="book__form-wrap">
                    <form onSubmit={handleBookService} className= "book__form" encType="multipart/form-data">
                        <h4 className="book__error-message">{error}</h4>
                        <div className="book__display-wrap">
                                <label className="book__label">Date</label>
                                <input type="datetime-local" className="book__input" ref={datetimeRef} />   
                                <label className="book__label">Description</label>
                                <textarea rows="3" className="book__textarea" ref={descriptionRef} placeholder="Description"></textarea>
                        </div>    
                        <button className="book__btn" type="submit" value="Submit" disabled={loading}>BOOK SERVICE</button>
                        {/* <button className="sign-up__cancel" type="reset" value="Reset">CANCEL</button> */}
                    </form>
                </div>
            </div> 

        </>
    )
}

export default BookService;



