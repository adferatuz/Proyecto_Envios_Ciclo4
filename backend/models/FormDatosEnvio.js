const mongoose = require('mongoose')
const Schema = mongoose.Schema

let datosEnviosSchema = new Schema ({
    time: {
        type: String,
        required: false,
    },
    date: {
        type: String,
        required: false, 
    },
    alto: {
        type: Number,
        required: false, 
    },
    ancho: {
        type: Number,
        required: false, 
    },
    largo: {
        type: Number,
        required: false, 
    },
    peso: {
        type: Number,
        required: false, 
    },
    userId: {
        type: String,
        required: false
    },
    delicado: {
        type: String,
        required: false
    },
    DireccionLlegada: {
        type: String,
        required: false,
    },
    ciudadLlegada: {
        type: String,
        required: false, 
    },
    IdRecibe: {
        type: Number,
        required: false, 
    },
    nombreRecibe: {
        type: String,
        required: false, 
    },
    apellidoRecibe: {
        type: String,
        required: false, 
    },
    direccionRemitente: {
        type: String,
        required: false,
    },
    ciudadRemitente: {
        type: String,
        required: false, 
    },
    IdRemitente: {
        type: Number,
        required: false, 
    },
    firstname: {
        type: String,
        required: false, 
    },
    lastName: {
        type: String,
        required: false, 
    }

},{
    colection:'Datos Envio'
})
module.exports = mongoose.model('FormDatosEnvio',datosEnviosSchema)