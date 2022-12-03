const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userIdSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId, ref: 'formLoggin'
    }
    
},{
    collection:'Id usuarios'
})
module.exports = mongoose.model('UserId',userIdSchema)