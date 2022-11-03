var oferta = require("../models/oferta");

class ofertaController {
   static ofertaRegisterController = async (req, res) => {
    const { title ,description ,requirements , skills , ciclo , dateOfPublication, expirationDate, createBy, User} = req.body

   const ofertaLaboral = new OfertaLaboral({
    title, description, requirements, skills, ciclo, dateOfPublication, expirationDate, createBy, User
    })
    await ofertaLaboral.save()

return res.send('oferta creada con exito')

}
}

module.exports = ofertaController;
