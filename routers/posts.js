const express = require('express');
const router = express.Router();

//Index

router.get('/', (req, res) => {
    res.send(`List of posts `);
});