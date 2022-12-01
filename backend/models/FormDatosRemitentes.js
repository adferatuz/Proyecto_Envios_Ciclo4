const mongoose = require('mongoose')
const Schema = mongoose.Schema

let DatosRemitenteSchema = new Schema ({
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
    },
    



},{
    colection:'Datos remitente'
})
module.exports = mongoose.model('FormDatosRemitente',DatosRemitenteSchema)