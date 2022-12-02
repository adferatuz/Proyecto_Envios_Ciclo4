let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router()

let datosEnviosSchema = require('../models/FormDatosEnvio')

// CRUD

// create formulario datos remitente
// localhost:4000/envios/create
router.route('/create').post((req, res, next)=>{
    datosEnviosSchema.create(req.body,(error, data) => {
        if (error){
            return next(error)
        } else{
            res.json(data)
        }
    })
})

// Read envios
// localhost:4000/envios/read/:id
router.route('/read/:id').get((req, res, next) => {
    datosEnviosSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Update login
// localhost:4000/envios/update/:id
router.route('/update/:id').put((req, res, next)=>{
    datosEnviosSchema.findByIdAndUpdate(req.params.id,{
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
// localhost:4000/envios//delete/:id
router.route('/delete/:id').delete((req, res, next)=>{
    datosEnviosSchema.findByIdAndDelete(req.params.id,(error, data)=> {
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