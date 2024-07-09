// routes.js
import { Router } from 'express';
const router = Router();
import { getTemplate, getNavegacion as getNav } from '../templates.js';

// Ruta para la página de inicio
router.get('/', (req, res) => {
  //res.send('¡Bienvenido a nuestra página de inicio!');
  res.send(getTemplate(getNav()))
});

// Ruta para la página de contacto
router.get('/contacto', (req, res) => {
  res.send(getTemplate(getNav()+'Ponte en contacto con nosotros aquí.'));
});

export default router; // Exporta el router
