const express = require('express');
const app = express();

app.get('/home', (req, res)=>{
    res.json({ 
        slackUsername: 'Jimoh Habib', 
        backend: true, 
        age: 22, 
        bio: 'A passionate backend developer seeking to up his skill with every opportunity' 
    })
})

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`app running on ${port}`)
});