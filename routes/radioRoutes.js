const express = require('express');

const router = express.Router();
// const Radio = require('../model/Radio')
const {addRadio,getAll,deleteRadio,updateRadio} = require('../controlers/addRadio')

router.post('/addstation',addRadio);
router.put('/edit/:id',updateRadio)
router.get('/',getAll)
router.delete('/:id',deleteRadio)
// router.get('/',getAll)


module.exports = router