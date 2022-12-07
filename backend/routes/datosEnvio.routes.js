let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router()

let datosEnviosSchema = require('../models/Envios')

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
//localhost:4000/envios/
router.route('/read').get((req, res) => {
    datosEnviosSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Read envios
// http://localhost:4000/envios?userId=1234
router.route('/').get((req, res, next) => {
    datosEnviosSchema.find({ userId: req.query.userId }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//localhost:5000/envios?userId=1234
router.route('/').get((req, res, next) => {
    datosEnviosSchema.find({ userId: req.query.userId }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Update login
//http://localhost:4000/envios/update/:id
router.route('/update/:id').put((req, res, next)=>{
    datosEnviosSchema.findOneAndUpdate({_id: req.params.id},{
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