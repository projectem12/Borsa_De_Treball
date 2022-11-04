var express = require("express");
var router = express.Router();
const ofertaController = require("../controllers/ofertaController");

router.get('/', (req, res)=>{
 
})
router.post('/registerOferta', ofertaController.ofertaRegisterController) 
router.post('/profile')
router.patch('/update-data')  
router.delete('/unregister')


module.exports = router;