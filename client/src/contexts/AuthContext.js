import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import firebase from '../firebase'


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}


export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState() 
    const [loading, setLoading] = useState(true)

    function signup(email, password, lastName, otherNames, telephone, address) {
        auth.createUserWithEmailAndPassword(email, password)
        .then(u => {
            console.log('created user ', u)
            writeUserData(u.user.uid, lastName, otherNames, telephone,u.user.email, address)
        }).catch(err =>{
            console.log('user creation err', err)
        })
    }

    function signin(email, password) {
        let loggedInUser = auth.signInWithEmailAndPassword(email, password)
        console.log('loggedInUser', loggedInUser)
  
        return loggedInUser
    }

    function logout() {
        return auth.signOut()
    }

    function thisCurrentUser(){
        console.log('user details', auth.currentUser())
        return auth.currentUser()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function writeUserData(userId, lastName, otherNames, telephone, email, address) {
         firebase.database().ref('users/' + userId).push({
            uid: userId,
            email: email,
            userLastName: lastName,
            userOtherNames: otherNames,
            userTelephone: telephone,
            userAddress: address
        }).then(u=>{
            console.log('user details added', u)
        }).catch(err => {{
            console.log('user details err', err)
        }})
    }
    

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
    })
    
    return unsubscribe
    }, [])

   
    const value = {
        currentUser,
        signin,
        signup,
        logout,
        resetPassword,
        thisCurrentUser
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}




