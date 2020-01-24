const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const { firebase } = require('./config')

app.get('/', (req, res) => {
    
    firebase.database().ref("/").once("value", (snapshot) => {
        let data = []
        let obj = snapshot.val()
        Object.keys(obj).forEach((key) => data.push(obj[key]))
        res.send(data);
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))