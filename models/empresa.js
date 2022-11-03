var mongoose = require("mongoose"); // Diem que utilitzem el paquet 'mongoose'

var Schema = mongoose.Schema; // Diem que utilitzarem esquemes per a les collecions de MongoDB

const empresaSchema = new Schema({
  nom: { type: 'string', required: true, minLenght: 4,  maxLength: 20},    
  direccion : { type: 'string', required: true, minLenght: 4,  maxLength: 60},
  empresaHabilitada : {type: 'boolean'},

  /*  ofertaLaboralPublicada : [{
      type: Schema.type.ObjectId,
      ref: 'ofertaLaboral'
  }] */
  
  refOfertaLaboral: [{
      type: Schema.type.ObjectId,
      ref: 'ofertaLaboral'
  }]
  
});


// Export model.
module.exports = mongoose.model("Publisher", PublisherSchema);  // Creo el model esquema per a poder-lo utilitzar
                                                                // amb el nom 'Publisher'
