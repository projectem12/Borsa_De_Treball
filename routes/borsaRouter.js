var express = require("express");
var empresaRouter = express.Router();
const ofertaController = require("../controllers/ofertaController");

userRouter.get('/', (req, res)=>{
 
})
userRouter.post('/registerOferta', ofertaController.ofertaRegisterController) 
userRouter.post('/profile')
userRouter.patch('/update-data')  
userRouter.patch('/update-email')
userRouter.patch('/update-password')
userRouter.delete('/unregister')


module.exports = router;