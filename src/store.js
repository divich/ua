import firebase from 'firebase';
import 'firebase/firestore';

const fire = firebase.initializeApp({
    apiKey: "AIzaSyBZGu0hv5rH2KHurDO6zH_QoSuR1nMyL2g",
    authDomain: "smilebotsua.firebaseapp.com",
    databaseURL: "https://smilebotsua.firebaseio.com",
    projectId: "smilebotsua",
    storageBucket: "smilebotsua.appspot.com",
    messagingSenderId: "969728912500",
    appId: "1:969728912500:web:9e028bea480c898f"
});

const firestore = firebase.firestore();
// const set = { timestampsInSnapshots: true }; can be put in later for firebase timestamp change
const settings = {};
firestore.settings(settings);

fire.firestore().enablePersistence()
    .then(() => {
        // Initialize Cloud Firestore through firebase
        console.log('Persistence working!');
    })
    .catch((err) => {
        if (err.code === 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a a time.
            // ...
            console.log('Multiple tabs open. So, no offline persistence for you.');
        } else if (err.code === 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
            console.log('Offline persistence not supported in this browser.');
        }
    });
const db = fire.firestore();
const users = db.collection('users');
    

export { db, users };