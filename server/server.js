const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/portfolio')

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String
})

const Contact = mongoose.model('Contact', contactSchema)

app.post('/api/contact', async (req, res) => {
  await Contact.create(req.body)
  res.json({ message: "Saved" })
})

app.listen(5000, () => console.log("Server running on 5000"))
