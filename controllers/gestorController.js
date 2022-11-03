var gestor= require("../models/gestor");
var oferta = require("../models/ofertaLaboral");
var user= require("../models/User");

class gestorController {

    // crear empresa
    static registerEmpresaControllers = async (req, res) => {
        const { nomEmpresa ,nomGestor, carrec , telefon , gestor , perfilHabilitado, refUser } = req.body
    
    
       const gestorempresa = new GestorModel({
        nomEmpresa ,nomGestor, carrec , telefon , gestor , perfilHabilitado, refUser
        })
        await gestorempresa.save()
    
       
    return res.send('Empresa Registrada con exito')
    
    }

    /*    static list(req,res,next) {
        Book.find()        
        .exec(function (err, list_books) {
            if (err) {
                return next(err);
            }
            res.render('books/list',{list:list_books})
        });
    }

    static create_get(req, res, next) {
        Publisher.find()        
        .exec(function (err, list_publishers) {
            if (err) {
                return next(err);
            }
            Genre.find()        
            .exec(function (err, list_genres) {
                if (err) {
                    return next(err);
                }
                res.render('books/new',{list_publisher:list_publishers, list_genre:list_genres});
            });
        });
    }

    static create_post(req, res) {
        Book.create(req.body, function (error, newBook)  {
            if(error){
                res.render('books/new',{error:error.message});
            }else{             
                res.redirect('/books');
            }
        })    
    }
*/
}

module.exports = gestorController;