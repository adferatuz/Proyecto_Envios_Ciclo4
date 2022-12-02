const mongoose = require('mongoose')
const Schema = mongoose.Schema

let usuarioSchema = new Schema ({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true
    }
},{
    collection:'loggin'
})
module.exports = mongoose.model('formLoggin',usuarioSchema)