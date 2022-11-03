var GestorModel = require("../models/gestor");
var Publisher = require("../models/ofertaLaboral");
var Genre = require("../models/User");

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

}

module.exports = gestorController;