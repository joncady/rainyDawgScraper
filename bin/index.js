#! /app/bin/node

// establish connection to firebase

// fetch of the site

const axios = require('axios')
const { firebase } = require('../config')


const fetchStats = () => {
    axios.get('http://rainydawg.org:8000/stream.xspf')
        .then(function (response) {
            // handle success
            let data = response.data;
            const CURRENT_STRING = "Current Listeners: ";
            let listenerIndex = data.indexOf(CURRENT_STRING) + CURRENT_STRING.length;
            let peakListenerIndex = data.indexOf("Peak Listeners: ");
            let parsedData = data.substring(listenerIndex, peakListenerIndex);

            firebase.database().ref("/").push({
                listeners: Number(parsedData),
                time: Date.now()
            })
                .then(() => {
                    process.exit();
                });
        })
}


const start = async () => {
    await fetchStats();
}

start()