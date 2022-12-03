let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router()

let DatosRecibeSchema = require('../models/FormDatosRecibe')

// CRUD

// create formulario datos recibe
// localhost:4000/recibe/create
router.route('/create').post((req, res, next)=>{
    DatosRecibeSchema.create(req.body,(error, data) => {
        if (error){
            return next(error)
        } else{
            res.json(data)
        }
    })
})

// Read envios
// localhost:4000/recibe/read/:id
router.route('/read/:id').get((req, res, next) => {
    DatosRecibeSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Update login
// localhost:4000/recibe/update/:id
router.route('/update/:id').put((req, res, next)=>{
    DatosRecibeSchema.findByIdAndUpdate(req.params.id,{
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
// localhost:4000/recibe//delete/:id
router.route('/delete/:id').delete((req, res, next)=>{
    DatosRecibeSchema.findByIdAndDelete(req.params.id,(error, data)=> {
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