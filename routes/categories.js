const express = require('express');
const router = express.Router();
const { getCategories, storeCategories } = require('../controllers/categoriesController');


router.get('/', getCategories);

router.post('/', storeCategories);

router.put('/:id', (req, res) => {
    res.send(`Update category with id: ${req.params.id}`);
})

router.delete('/:id', (req, res) => {
    res.send(`Delete category with id: ${req.params.id}`);
})

module.exports = router;