const express = require('express')
const bodyParser = require('body-parser')

const { PORT } = require('./config/serverConfig')
// const { sendBasicEmail } = require('./services/email-service')
var cron = require('node-cron');

const setupAndStartServer = () => {
    const app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    app.listen(PORT, () => {
        console.log(`Reminder Service up and running at port ${PORT}`)


    })

    // cron.schedule('*/2 * * * *', () => {
    //     console.log('running a task every two minutes');
    // });

}

setupAndStartServer();
