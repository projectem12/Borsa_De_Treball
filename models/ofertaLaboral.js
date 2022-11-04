var mongoose = require("mongoose"); // Diem que utilitzem el paquet 'mongoose'

var Schema = mongoose.Schema; // Diem que utilitzarem esquemes per a les collecions de MongoDB

const ofertaLaboralSchema = new Schema({
    title : { type: 'string', required: true,  maxLength: 100},    
    description : { type: 'string', required: true},
    requirements : { type: 'string', required: true},
    skills : { type: 'string', required: true},
    ciclo : { type: 'string', required: true, maxLength: 150},
    dateOfPublication : { type: 'date', required: true},
    expirationDate : { type: 'date'},
    /*createBy : [{
        type: Schema.type.ObjectId,
        ref: 'gestor'
    }]
   
    User : [{
        type: Schema.type.ObjectId,
        ref: 'User'
    }]*/
});

// Export model.

module.exports = mongoose.model("ofertaLaboral", ofertaLaboralSchema);    // Creo el model esquema per a poder-lo utilitzar

