var express = require("express");
var userRouter = express.Router();
const userController = require("../controllers/userController");

userRouter.get('/', (req, res)=>{
    res.render('new')
})
userRouter.get('/getUsers', userController.getUsersControllers ) // funciona (json no view)
userRouter.post('/register', userController.userRegistrerController) // funciona
userRouter.post('/login', userController.userLoginController ) 
userRouter.post('/profile')
userRouter.patch('/update-data')  
userRouter.patch('/update-email')
userRouter.patch('/update-password')
userRouter.delete('/unregister')

module.exports = userRouter;