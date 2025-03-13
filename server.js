//basic structure
const express = require('express');
const app = express();
const port = 3000;




//route requirement 
const postRoute = require('./routers/posts');

// server listening 
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});

// Home route 

app.get('/', (req, res) => {
    res.send('bakery home')


});

//Declaration of new routes to express 
app.use("/posts", postRoute)
