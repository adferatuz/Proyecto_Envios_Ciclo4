let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router()

let usuarioSchema = require('../models/User')

// CRUD

//
// create login
// localhost:4000/loggin/create
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
// localhost:4000/loggin/read
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
// localhost:4000/loggin/update/:id
router.route('/update/:id').put((req, res, next)=>{
    usuarioSchema.findOneAndUpdate({_id: req.params.id},{
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
// localhost:4000/loggin/delete/:id
router.route('/delete/:id').delete((req, res, next)=>{
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


