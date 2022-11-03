var mongoose = require("mongoose"); // Diem que utilitzem el paquet 'mongoose'

var Schema = mongoose.Schema; // Diem que utilitzarem esquemes per a les collecions de MongoDB

const alumnoSchema = new Schema({
    dni : { type: 'string', required: true, minLenght: 9,  maxLength: 9},    
    nom : { type: 'string', required: true},
    cognoms : { type: 'string', required: true},
    //data_naixement : { type: 'date', required: true},
    //carnet : { type: 'boolean', required: true},
    estudis : { type: 'string', required: true},
   
    /*refUser: [{
        type: Schema.type.ObjectId,
        ref: 'User'
    }]*/
});

// Export model.
module.exports = mongoose.model("Book", BookSchema);    // Creo el model esquema per a poder-lo utilitzar