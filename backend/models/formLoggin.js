const mongoose = require('mongoose')
const Schema = mongoose.Schema

let usuarioSchema = new Schema ({
    Password: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
    
    
},{
    collection:'loggin'
})
module.exports = mongoose.model('formLoggin',usuarioSchema)