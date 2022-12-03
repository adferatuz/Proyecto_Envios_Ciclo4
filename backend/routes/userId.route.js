let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router()

let userIdSchema = require('../models/UserId')

//localhost:5000/users/
router.route('/').get((req, res) => {
    userIdSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = router