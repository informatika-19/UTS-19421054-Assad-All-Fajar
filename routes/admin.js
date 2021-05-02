const router = require('express').Router()
const adminController = require ('../controller/admin')

router.post('/create/', (req, res)=> {
    adminController.create(req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })

  router.put('/update/:id', (req, res)=> {
    adminController.update(req.params.id, req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })

  router.get('/getall/', (req, res)=> {
    adminController.showAllData()
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })

  router.get('/getbyid/:id', (req, res)=> {
    adminController.showDataByID(req.params.id)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })

  router.delete('/delete/:id', (req, res)=> {
    adminController.delete(req.params.id)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })

module.exports = router