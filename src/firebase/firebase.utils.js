import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAFKqonKFVMN6f_I_rjxFMWdxSYPlDNc_0",
    authDomain: "crwn-db-ce13a.firebaseapp.com",
    databaseURL: "https://crwn-db-ce13a.firebaseio.com",
    projectId: "crwn-db-ce13a",
    storageBucket: "crwn-db-ce13a.appspot.com",
    messagingSenderId: "102475532152",
    appId: "1:102475532152:web:918bccd5a01cc8889cea8d",
    measurementId: "G-8TV8J4C2Q3"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;