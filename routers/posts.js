const express = require('express');
const router = express.Router();
//request array posts
const posts = require('../posts');
//Index
router.get('/', (req, res) => {

    res.json(posts);
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