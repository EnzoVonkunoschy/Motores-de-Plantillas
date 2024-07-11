// routes.js
import { Router } from 'express';
const router = Router();

// Ruta para la página de inicio
router.get('/', (req, res) => {
  //res.send('¡Bienvenido a nuestra página de inicio!');
  //res.render('pages/index')
  var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";
    res.render('pages/index', {
    mascots: mascots,
    tagline: tagline
    });
   
});
router.get('/about', (req, res) => {
  //res.send('¡Bienvenido a nuestra página de inicio!');
  res.render('pages/about')
});

// Ruta para la página de contacto
router.get('/contacto', (req, res) => {
  res.send('Ponte en contacto con nosotros aquí.');
});

export default router; // Exporta el router
