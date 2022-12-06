const mongoose = require('mongoose')
const Schema = mongoose.Schema


let userIdSchema = new Schema ({
    userId: {
        type: String,
        required: true
    }
    
},{
    collection:'Id usuarios'
})
module.exports = mongoose.model('UserId',userIdSchema)