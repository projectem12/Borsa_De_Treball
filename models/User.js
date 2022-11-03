var mongoose = require("mongoose"); // Diem que utilitzem el paquet 'mongoose'

var Schema = mongoose.Schema; // Diem que utilitzarem esquemes per a les collecions de MongoDB

const userSchema = new Schema({
    // _id -> evitar que mongo cree su propio id
    _id: { type: 'string', _id:false},
    name : { type: 'string', required: true, minLenght: 4,  maxLength: 20},    
    description : { type: 'string', required: true, minLenght: 4,  maxLength:100 },
    email : {type: 'string', required: true, unique: true},
    passwordHash: { type: 'string', required: true, minLenght: 4},
    rolUser: {
        type: 'string',
        enum: ["gestor", "responsable", "alumno"], required: true
    }
    
})

// Export model.
module.exports = mongoose.model("Book", BookSchema);    // Creo el model esquema per a poder-lo utilitzar