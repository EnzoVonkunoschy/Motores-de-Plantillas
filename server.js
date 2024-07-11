import express from 'express';

//const routes = require('./routes');
import router from './routes/routes.js'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { engine } from 'express-handlebars'

var app = express()
app.use('/', router);

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
   
}));

app.set('view engine', 'hbs');

/* 
app.get('/',function(req,res){
    res.send('Bienvenido a Tutoriales');
});*/

app.get('/Node',function(req,res)
{
 res.send("Tutorial en Node");
});
app.get('/Angular',function(req,res)
{
 res.send("Tutorial en Angular");
});



var server = app.listen(3000,()=>{console.log("Escuchando en puerto")})