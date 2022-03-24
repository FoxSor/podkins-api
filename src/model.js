const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const newSchema = new Schema({
    nombre: String
})

const Model = mongoose.model('Model', newSchema)

module.exports = Model;