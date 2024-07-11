let db = {socios: [{nombre: "Enzo", edad: 40, estado: true},
    {nombre: "Tere", edad: 20, estado: false},
    {nombre:"María", edad: 35,estado: true},
    {nombre:"Pedro", edad: 18,estado: false}]}

function getSocios(){
   // return {socios: [{nombre: "enzo", edad: 40, estado: true},{nombre: "Tere", edad: 20, estado: false}]}
   return db
}

export { getSocios };
