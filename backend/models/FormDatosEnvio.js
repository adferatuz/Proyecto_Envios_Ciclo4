const mongoose = require('mongoose')
const Schema = mongoose.Schema

let DatosEnviosSchema = new Schema ({
    time: {
        type: TimeRanges,
        required: true,
    },
    date: {
        type: Date,
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
module.exports = mongoose.model('FormDatosEnvio',DatosEnviosSchema)