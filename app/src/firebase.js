import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDPs-socGOqklEm6jGNUqhxo6pPda1IjCM",
    authDomain: "discord-clone-16ab0.firebaseapp.com",
    projectId: "discord-clone-16ab0",
    storageBucket: "discord-clone-16ab0.appspot.com",
    messagingSenderId: "951874082401",
    appId: "1:951874082401:web:67b04683bc3ab9b67e3c20"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db