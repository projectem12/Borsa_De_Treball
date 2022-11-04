var express = require('express');
var path = require('path');
var dotenv = require('dotenv'); // Per a insertar el fitxer '.env' amb totes les variables (**)

var borsaRouter = require('./routes/borsaRouter');
var empresaRouter = require('./routes/empresaRouter');
var userRouter = require('./routes/user.routes');



var app = express();

dotenv.config();  // Per a poder utilitzar les variables del fitxer '.env' (**)

const port = process.env.PORT || 8000;  // Ja es pot accedir a les variables de la següent manera 
                                        //'process.env.nom_variable' (**)

// Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = process.env.MONGODB_URL;

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
//mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/public')));
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


app.use('/home', borsaRouter );
app.use('/empresa',empresaRouter);
app.use('/User', userRouter);



module.exports = app;
