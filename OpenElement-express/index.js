const express = require('express');
const app = express();

app.use(express.static('public'))



//test port
app.listen(3000, function (){
    console.log('Listening on port 3000...')
})
