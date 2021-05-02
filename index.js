const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/uts', {
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() =>{
    console.log('connection successful')
}).catch((e) => {
    console.log(e)
    console.log('connection failed')
})

app.use(bodyParser.json({
    extended: true,
    limit:'20mb'
  }))
  
  app.use(bodyParser.urlencoded({
    extended: true,
    limit:'20mb'
  }))

  app.get('/', (req, res) => {
    res.send('hello word')
  })

  app.use('/admin/',require('./routes/admin'))

  app.listen(2000, () => {
      console.log('server strated')
  })