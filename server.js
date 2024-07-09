import express from 'express';
import { getTemplate,getNavegacion as getNav } from './templates.js';

//const routes = require('./routes');
import router from './routes/routes.js'

var app = express()
app.use('/', router);
/* 
app.get('/',function(req,res){
    res.send('Bienvenido a Tutoriales');
});*/

app.get('/node',function(req,res)
{
 res.send("Tutorial en Node");
});
app.get('/angular',function(req,res)
{
 res.send("Tutorial en Angular");
});




var server = app.listen(3000,()=>{console.log("Escuchando en puerto")})