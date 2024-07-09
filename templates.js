function getTemplate(arg){
    return `<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
 </head>
 <body>
     <h1>Destino Viajes</h1>
     <h2>Tu modo de viajar</h2>
     ${arg}
 </body>
 </html>` 
 }

 function getNavegacion(){
    return `<nav>
        <a href="http://localhost:3000/">Inicio</a>
        <a href="http://localhost:3000/node">Node</a>
        <a href="http://localhost:3000/angular">Angular</a>
        <a href="http://localhost:3000/contacto">Contacto</a>
    </nav>`
 }

 export {getTemplate, getNavegacion}