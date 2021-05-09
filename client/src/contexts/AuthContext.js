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

    function signup(email, password, lastName, otherNames, telephone) {
        auth.createUserWithEmailAndPassword(email, password)
        .then(u => {
            console.log('created user ', u)
            writeUserData(u.user.uid, lastName, otherNames, telephone)
        }).catch(err =>{
            console.log('user creation err', err)
        })
    }

    function signin(email, password) {
        let loggedInUser = auth.signInWithEmailAndPassword(email, password)
        console.log('loggedInUser', loggedInUser)
        // console.log('loggedInUser222', auth.currentUser)
//         auth()
//   .getUser('7aS56Roa0KTiu0qxEYHgB8KPaa12')
//   .then((userRecord) => {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
//   })
//   .catch((error) => {
//     console.log('Error fetching user data:', error);
//   });
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

    function writeUserData(userId, lastName, otherNames, telephone) {
         firebase.database().ref('users/').push({
            userId: userId,
            userLastName: lastName,
            userOtherNames: otherNames,
            userTelephone: telephone
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


