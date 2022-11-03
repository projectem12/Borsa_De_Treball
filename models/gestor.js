var mongoose = require("mongoose"); // Diem que utilitzem el paquet 'mongoose'

var Schema = mongoose.Schema; // Diem que utilitzarem esquemes per a les collecions de MongoDB

const gestorSchema = new Schema({
    nomEmpresa: {type: 'string', required: true, minLenght: 4,  maxLength: 20},
    nomGestor: { type: 'string', required: true, minLenght: 3,  maxLength: 20},    
    carrec : { type: 'string', required: true, minLenght: 4,  maxLength: 150},
    telefon : { type: 'number', required: true, minLenght: 4,  maxLength: 20},
    gestor : {type: 'boolean'},
    perfilHabilitado : {type: 'boolean'},


    refUser: {type: mongoose.Schema.Types.ObjectID,ref:'User'}
    
    
})

// Export model.
module.exports = mongoose.model("Book", BookSchema);    // Creo el model esquema per a poder-lo utilitzar