import express from 'express';
const router = express.Router();
import { registrar, perfil, confirmar, autenticar, olvidePassword, comprobarToken, nuevoPassword} from '../controllers/veterinarioController.js';
import  checkAuth  from '../middleware/authMiddleware.js'

//? Area Publica
router.post('/', registrar); // registramos usuario
router.get('/confirmar/:token', confirmar); // confirmamos cuenta
router.post('/login', autenticar); //para iniciar sesion
router.post('/olvide-password', olvidePassword); //valida el email usuario
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword);//  leemos el token y almacenamos nuevo password



//? Area Privada
router.get('/perfil', checkAuth, perfil);

export default router;