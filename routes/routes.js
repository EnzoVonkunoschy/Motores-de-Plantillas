// routes.js
import { Router } from 'express';
const router = Router();

// Ruta para la página de inicio
router.get('/', (req, res) => {
  //res.send('¡Bienvenido a nuestra página de inicio!');
  res.render('pages/index')
});

// Ruta para la página de contacto
router.get('/contacto', (req, res) => {
  res.send('Ponte en contacto con nosotros aquí.');
});

export default router; // Exporta el router
