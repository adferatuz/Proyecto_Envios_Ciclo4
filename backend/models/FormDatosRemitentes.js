const mongoose = require('mongoose')
const Schema = mongoose.Schema

let remitenteSchema = new Schema ({
    direccionRemitente: {
        type: String,
        required: true,
    },
    ciudadRemitente: {
        type: String,
        required: true, 
    },
    IdRemitente: {
        type: Number,
        required: true, 
    },
    firstname: {
        type: String,
        required: true, 
    },
    lastName: {
        type: String,
        required: true, 
    }
},{
    colection:'DatosRemitente'
})
module.exports = mongoose.model('FormDatosRemitentes',remitenteSchema)