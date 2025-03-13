const express = require('express');
const router = express.Router();

//Index
router.get('/', (req, res) => {
    res.send(`List of posts `);
});

// show
router.get('/:id', (req, res) => {
    res.send(`posts details ${req.params.id}`)
});

// store
router.post('/', (req, res) => {
    res.send(`store new post`)
});

//update 

router.put('/:id', (req, res) => {
    res.send(`updated posts ${req.params.id}`)
});

//patch or modify

router.patch('/:id', (req, res) => {
    res.send(`patch posts ${req.params.id}`)
});

// delete 
router.delete('/:id', (req, res) => {
    res.send(`Delete posts ${req.params.id}`)
});

module.exports = router