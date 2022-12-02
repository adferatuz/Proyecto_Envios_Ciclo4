let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router()

let remitenteSchema = require('../models/FormDatosRemitentes')

// CRUD

// create formulario datos remitente
// localhost:4000/remitente/create
router.route('/create').post((req, res, next)=>{
    remitenteSchema.create(req.body,(error, data) => {
        if (error){
            return next(error)
        } else{
            res.json(data)
        }
    })
})

// Read envios
// localhost:4000/remitente/read/:id
router.route('/read/:id').get((req, res, next) => {
    remitenteSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Update login
// localhost:4000/remitente/update/:id
router.route('/update/:id').put((req, res, next)=>{
    remitenteSchema.findByIdAndUpdate(req.params.id,{
        $set: req.body
    },
         (error, data)=> {
        if (error){
            return next(error)
        } else{
            res.json(data)
        } 
    })
})

//Delete login
// localhost:4000/remitente//delete/:id
router.route('/delete/:id').delete((req, res, next)=>{
    remitenteSchema.findByIdAndDelete(req.params.id,(error, data)=> {
        if (error){
            return next(error)
        } else{
            res.status(200).json({
                msg:data
            })
        } 
    })
})

module.exports = router