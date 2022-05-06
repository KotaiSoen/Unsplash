const express = require('express');
const router = express.Router();
const imageController = require('../controller/imageController');

router.get('/', imageController.image_index);
router.post('/', imageController.image_create_image);
router.delete('/:id', imageController.image_delete_image)

module.exports = router;




