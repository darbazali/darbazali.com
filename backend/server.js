'use strict'
console.clear()

import express from 'express'
import nodemailer from 'nodemailer'
import compress from 'compression'
import path from 'path'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

const __dirname = path.resolve()
console.log(__dirname)
const { PORT, USERNAME, PASSWORD } = process.env

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compress())
app.set('views', 'views')

app.use(express.static(__dirname + '/public'))

// use statics

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
} else {
  // setup routes
  app.get('/', (req, res) => {
    res.status(200).send('API is working..')
  })
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  service: 'Gmail',
  port: 587,
  secure: true,

  auth: {
    user: USERNAME,
    pass: PASSWORD,
  },
})

// verify connection configration
transporter.verify((error, process) => {
  if (error) console.log(error)
  // else console.log('Server is ready to take our mesages!')
})

// message endpoint
app.post('/access', async (req, res, next) => {
  const { email, message, subject } = req.body

  //2. You can configure the object however you want
  const mail = {
    from: email,
    to: USERNAME,
    name: email,
    subject: subject,
    text: message,
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      // console.log(err)
      res.sendStatus(500)
    } else {
      res.status(200).send('Message successfully sent')
    }
  })
})

app.listen(PORT || 5000, () => {
  console.info(`Server listenting on port ${PORT}`)
})
