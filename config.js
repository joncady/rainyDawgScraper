const firebase = require('firebase')
require('firebase/database')

const firebaseConfig = {
    apiKey: "AIzaSyA_tq5YFJH7MTbDvp_84COTao10Lfw8Kjc",
    authDomain: "scraper-3d091.firebaseapp.com",
    databaseURL: "https://scraper-3d091.firebaseio.com",
    projectId: "scraper-3d091",
    storageBucket: "scraper-3d091.appspot.com",
    messagingSenderId: "221843721630",
    appId: "1:221843721630:web:2ec6cfe827cab7120a5a8f"
}

firebase.initializeApp(firebaseConfig)

exports.firebase = firebase