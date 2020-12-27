'use strict'
console.clear()

import express from 'express'
import nodemailer from 'nodemailer'
import path from 'path'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

const __dirname = path.resolve()

const { PORT, USERNAME, PASSWORD } = process.env

app.use('/public', express.static(path.join(__dirname, 'public')))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

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
  else console.log('Server is ready to take our mesages!')
})

app.get('/', (req, res) => {
  res.send('API WORKING..')
})

// message endpoint
app.post('/access', async (req, res, next) => {
  const { email, message, subject } = req.body

  //2. You can configure the object however you want
  const mail = {
    from: email,
    to: USERNAME,
    subject: subject,
    text: message,
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err)
      res.sendStatus(500)
    } else {
      res.status(200).send('Message successfully sent')
    }
  })
})

app.listen(PORT || 5000, () => {
  console.info(`Server listenting on port ${PORT}`)
})
