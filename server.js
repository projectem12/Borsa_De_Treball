var express = require('express');
var path = require('path');
var dotenv = require('dotenv'); // Per a insertar el fitxer '.env' amb totes les variables (**)

var indexRouter = require('./routes/indexRouter');
var genresRouter = require('./routes/genresRouter');
var publisherRouter = require('./routes/publisherRouter');
<<<<<<< HEAD
var booksRouter = require('./routes/booksRouter');
=======
var technicalBookRouter = require('./routes/technicalBookRouter');

>>>>>>> c7e4ba2bf9c5bb924fe3a67b50beb6eda1ba3862

var app = express();

dotenv.config();  // Per a poder utilitzar les variables del fitxer '.env' (**)

const port = process.env.PORT || 8000;  // Ja es pot accedir a les variables de la següent manera 
                                        //'process.env.nom_variable' (**)

// Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = process.env.MONGODB_URI;

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

<<<<<<< HEAD
// Per a poder utilitzar el sistema de rutes
app.use('/', indexRouter);              // Qualssevol ruta amb la barra '/' anirà al fitxer 'indexRouter'
app.use('/genres', genresRouter);       // Qualssevol ruta amb la barra '/genres' anirà al fitxer 'genresRouter'
app.use('/publisher', publisherRouter); // Qualssevol ruta amb la barra '/publisher' anirà al fitxer 'publisherRouter'
app.use('/books', booksRouter);         // Qualssevol ruta amb la barra '/books' anirà al fitxer 'bookRouter'
=======
app.use('/home', indexRouter);
app.use('/genres', genresRouter);
app.use('/publisher', publisherRouter);
app.use('/technicalbook', technicalBookRouter);
>>>>>>> c7e4ba2bf9c5bb924fe3a67b50beb6eda1ba3862

module.exports = app;
