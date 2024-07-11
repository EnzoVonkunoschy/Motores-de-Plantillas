// routes.js
import { Router } from 'express';
const router = Router();
import { getSocios } from '../db.js';

// Ruta para la página de inicio
router.get('/', (req, res) => {
  //res.send('¡Bienvenido a nuestra página de inicio!');
   /*res.render('home');*/
    //res.render('home', {socios: [{nombre: "enzo", edad: 40, estado: true},{nombre: "Tere", edad: 20, estado: false}]});
    res.render('home', getSocios());

});

// Ruta para la página de contacto
router.get('/contacto', (req, res) => {
  res.send('Ponte en contacto con nosotros aquí.');
});

export default router; // Exporta el router
