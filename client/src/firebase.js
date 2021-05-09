import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"


const app = firebase.initializeApp({

    apiKey: "AIzaSyC7-NbAO61VvfII2BbPdKAlAG8bOXOh6aA",
    authDomain: "auth-development-566e9.firebaseapp.com",
    projectId: "auth-development-566e9",
    databaseURL: "https://auth-development-566e9-default-rtdb.firebaseio.com/",
    storageBucket: "auth-development-566e9.appspot.com",
    messagingSenderId: "413706297502",
    appId: "1:413706297502:web:bb1198fe231c6cc740db8f"

})

function initFirebase(){
   if(!firebase.apps.length){
       firebase.initializeApp(app);
   } 
}

initFirebase();
export { firebase };
export const auth = app.auth()
export default app

