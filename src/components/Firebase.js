import firebase from 'firebase/compat/app';
import {initializeApp} from 'firebase/app';
import { getDatabase } from "firebase/database"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBIpH1Bk0ZwLeoVdtiOUR70zUAjI2OFIU0",
    authDomain: "shopping-s-delight.firebaseapp.com",
    projectId: "shopping-s-delight",
    storageBucket: "shopping-s-delight.appspot.com",
    messagingSenderId: "7673598403",
    appId: "1:7673598403:web:2cd5866525c881c6dead76",
    measurementId: "G-J5459TR8YB"
};
const app = initializeApp(firebaseConfig)
firebase.initializeApp(firebaseConfig)
const db = getDatabase(app)
const auth = firebase.auth();

export { db , auth}
