var express = require("express");
<<<<<<< HEAD
var userRouter = express.Router();

userRouter.get('/', (req, res)=>{
    res.render('new')
})
userRouter.get('/getUsers',  userC.getUsersControllers ) // funciona (json no view)
userRouter.post('/register', userC.userRegistrerController) // funciona
userRouter.post('/login', userC.userLoginController ) 
userRouter.post('/profile')
userRouter.patch('/update-data')  
userRouter.patch('/update-email')
userRouter.patch('/update-password')
userRouter.delete('/unregister')
=======
var router = express.Router();

const publisher_controller = require("../controllers/publisherController");

// GET request for list of all Genre.
router.get("/", publisher_controller.list);
router.get("/new", publisher_controller.create_get);
router.post("/save", publisher_controller.create_post);
router.get("/delete/:id", publisher_controller.delete_get);
router.post("/delete/:id", publisher_controller.delete_post);
router.get("/update/:id", publisher_controller.update_get);
router.post("/update/:id", publisher_controller.update_post);

>>>>>>> c7e4ba2bf9c5bb924fe3a67b50beb6eda1ba3862

module.exports = router;