var express = require("express");
var userRouter = express.Router();

userRouter.get('/', (req, res)=>{
 
})
userRouter.post('/registerOferta', gestor.ofertaRegisterController) 
userRouter.post('/profile')
userRouter.patch('/update-data')  
userRouter.patch('/update-email')
userRouter.patch('/update-password')
userRouter.delete('/unregister')


module.exports = router;