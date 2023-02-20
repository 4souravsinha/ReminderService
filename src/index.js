const express = require('express')
const bodyParser = require('body-parser')

const { PORT } = require('./config/serverConfig')
const { sendBasicEmail } = require('./services/email-service')

const setupAndStartServer = () => {
    const app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    app.listen(PORT, () => {
        console.log(`Reminder Service up and running at port ${PORT}`)

        // sendBasicEmail(
        //     'support@am.in',
        //     '1929122@kiit.ac.in',
        //     'You have been selected at amazon for SDE role',
        //     'Congrats , submit your document'
        // )

    })
}

setupAndStartServer();
