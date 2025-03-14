const express = require('express');
const router = express.Router();
//request array posts
const posts = require('../posts');


//Index
router.get('/', (req, res) => {
    res.json(posts);
});

// show
router.get('/:slug', (req, res) => {
    //res.send(`posts details ${req.params.id}`)


    // tried bonus 2 failed attempt 3
    for (let i = 0; i < posts.length; i++) {
        let thispost = posts[i]
        if (thispost.slug === posts.slug) {
            return res.json(thispost);
        }
    }

});

// store
router.post('/', (req, res) => {
    res.send(`store new post`)
});

//update 

router.put('/:slug', (req, res) => {
    res.send(`updated posts ${req.params.id}`)
});

//patch or modify

router.patch('/:slug', (req, res) => {
    res.send(`patch posts ${req.params.id}`)
});

// delete 
router.delete('/:slug', (req, res) => {
    res.send(`Delete posts ${req.params.id}`)
});

module.exports = router