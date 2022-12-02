const mongoose = require('mongoose')
const Schema = mongoose.Schema

let datosEnviosSchema = new Schema ({
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true, 
    },
    alto: {
        type: Number,
        required: true, 
    },
    ancho: {
        type: Number,
        required: true, 
    },
    largo: {
        type: Number,
        required: true, 
    },
    peso: {
        type: Number,
        required: true, 
    }

},{
    colection:'Datos Envio'
})
module.exports = mongoose.model('FormDatosEnvio',datosEnviosSchema)