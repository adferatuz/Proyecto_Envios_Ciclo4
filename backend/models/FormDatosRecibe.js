const mongoose = require('mongoose')
const Schema = mongoose.Schema

let DatosRecibeSchema = new Schema ({
    DireccionLlegada: {
        type: String,
        required: true,
    },
    ciudadLlegada: {
        type: String,
        required: true, 
    },
    IdRecibe: {
        type: Number,
        required: true, 
    },
    nombreRecibe: {
        type: String,
        required: true, 
    },
    apellidoRecibe: {
        type: String,
        required: true, 
    },
    userId: {
        type: Schema.Types.ObjectId
    }

},{
    colection:'Datos recibe'
})
module.exports = mongoose.model('FormDatosRecibe',DatosRecibeSchema)