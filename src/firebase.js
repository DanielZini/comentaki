import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCy-qE830tr1AzrEKNg1EeTZdmWotNeT0E",
  authDomain: "comentaki-zini.firebaseapp.com",
  databaseURL: "https://comentaki-zini.firebaseio.com",
  projectId: "comentaki-zini",
  storageBucket: "comentaki-zini.appspot.com",
  messagingSenderId: "506365719686",
  appId: "1:506365719686:web:b9a5fab5db0c26fb46cd07"
}

firebase.initializeApp(firebaseConfig)

export default firebase