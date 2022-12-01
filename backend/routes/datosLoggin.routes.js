let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router()

let usuarioSchema = require('../models/formLoggin')

// CRUD

//
// create login
router.route('/create').post((req, res, next)=>{
    usuarioSchema.create(req.body,(error, data) => {
        if (error){
            return next(error)
        } else{
            res.json(data)
        }
    })
})

// Read login
//local
router.route('/read').get((req, res, next)=>{
    usuarioSchema.find((error, data)=> {
        if (error){
            return next(error)
        } else{
            res.json(data)
        } 
    })
})

//Update login
router.route('/edit/:id').put((req, res, next)=>{
    usuarioSchema.findByIdAndUpdate(req.params.id,{
        $set: req.body,
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
router.route('/read').delete((req, res, next)=>{
    usuarioSchema.findByIdAndDelete(req.params.id,(error, data)=> {
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


