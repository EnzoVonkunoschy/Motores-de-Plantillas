var express = require('express')

var app = express()

app.get('/',(req,res)=>{
    res.send('Hola Mundo!')
})

var server = app.listen(3000,()=>{console.log("Escuchando en puerto")})