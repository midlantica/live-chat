import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAW0XYKSriNE-MOQPATa-2OcJDUCtFSMN8",
  authDomain: "ninja-91-31d7e.firebaseapp.com",
  projectId: "ninja-91-31d7e",
  storageBucket: "ninja-91-31d7e.appspot.com",
  messagingSenderId: "95861582332",
  appId: "1:95861582332:web:a31d5a6db419b26a11aa79"
}

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
