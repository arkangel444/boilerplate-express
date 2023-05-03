let express = require('express');
let app = express();


app.get("/", (req,res)=>{
    let absolute = __dirname + 'views/index.html'
    res.send(absolute)
});































 module.exports = app;
