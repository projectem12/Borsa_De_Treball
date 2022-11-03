var mongoose = require("mongoose"); // Diem que utilitzem el paquet 'mongoose'

var Schema = mongoose.Schema; // Diem que utilitzarem esquemes per a les collecions de MongoDB

const borsaSchema = new Schema({
  title : { type: 'string', required: true, minLenght: 4,  maxLength: 20},    
  description : { type: 'string', required: true, minLenght: 4,  maxLength: 20},
  cicle : { type: 'string', required: true},
  capacitats : { type: 'string', required: true, minLenght: 4,  maxLength: 20},
  requisitos : { type: 'string', required: true, minLenght: 4,  maxLength: 20}
});

// Export model.
module.exports = mongoose.model("Borsa", BorsaSchema);  // Creo el model esquema per a poder-lo utilitzar
                                                        // amb el nom 'Genre'
