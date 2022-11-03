var express = require("express");
var empresaRouter = express.Router();

  // empresaRouter.get('/registerEmpresa', userC.registerEmpresaControllers)
  empresaRouter.post('/registerEmpresa', empresa.registerEmpresaControllers)
  /*
userRouter.post('/login')
userRouter.post('/profile')
userRouter.patch('/gest-oferta')  
userRouter.patch('/crear-oferta')
userRouter.del('/del-oferta') */


module.exports = router;