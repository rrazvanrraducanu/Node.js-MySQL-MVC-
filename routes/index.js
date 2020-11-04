var express = require('express');
var myController=require('../controllers/MyController');
var db=require('../database');
var router = express.Router();

router.get('/', myController.getFlowers );
router.get('/view/:id', myController.getFlower );

router.get('/add_form', myController.addFlower );
router.post('/add', myController.insertFlower);

router.get('/delete/:id', myController.deleteFlower );

router.get('/edit/:id', myController.editFlower );
router.all('/edit/update', myController.updateFlower );

module.exports = router;