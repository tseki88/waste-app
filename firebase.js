import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCRQp3QCXEj61icp2ZRauzRLsu1_xH14F4",
    authDomain: "littr-waste-app.firebaseapp.com",
    databaseURL: "https://littr-waste-app.firebaseio.com",
    projectId: "littr-waste-app",
    storageBucket: "littr-waste-app.appspot.com",
    messagingSenderId: "171546914262",
    appId: "1:171546914262:web:be32b4528bb0e451c0c877",
    measurementId: "G-XW28YNCZQM"
};

firebase.initializeApp(firebaseConfig);

export default firebaseDB = firebase.database()