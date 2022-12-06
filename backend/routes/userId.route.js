let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router()

let userIdSchema = require('../models/UserId')

//localhost:4000/userId/
router.route('/').get((req, res) => {
    userIdSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// localhost:4000/users/create
router.route('/create').post((req, res, next)=>{
    userIdSchema.create(req.body,(error, data) => {
        if (error){
            return next(error)
        } else{
            res.json(data)
        }
    })
})

module.exports = router