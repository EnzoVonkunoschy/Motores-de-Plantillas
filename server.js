import express from 'express';

//const routes = require('./routes');
import router from './routes/routes.js'

var app = express()
app.use('/', router);

app.set('view engine', 'ejs');

app.get('/Node',function(req,res)
{
 //res.send("Tutorial en Node");
 res.render('pages/index')
});
app.get('/Angular',function(req,res)
{
 res.send("Tutorial en Angular");
});



var server = app.listen(3000,()=>{console.log("Escuchando en puerto")})