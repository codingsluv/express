const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.json({
        message: 'Categories',
        status: 200,
        data: [
            { id: 1, name: 'Electronics' },
            { id: 2, name: 'Clothing' },
            { id: 3, name: 'Books' },
        ],
    });
})

router.post('/add', (req, res) => {
    res.send('Add a new category!');
})

router.put('/:id', (req, res) => {
    res.send(`Update category with id: ${req.params.id}`);
})

router.delete('/:id', (req, res) => {
    res.send(`Delete category with id: ${req.params.id}`);
})

module.exports = router;