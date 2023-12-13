import express from 'express'
import {
  paginaContacto,
  paginaDetalleViajes,
  paginaInicio,
  paginaNosotros,
  paginaTestimoniales,
  paginaViajes
} from '../controllers/paginasController.js'
import { guardarTestimonial } from '../controllers/testimonialController.js'
const router = express.Router()

router.get('/', paginaInicio)
router.get('/nosotros', paginaNosotros)
router.get('/contacto', paginaContacto)
router.get('/viajes', paginaViajes)
router.get('/viajes/:slug', paginaDetalleViajes)
router.get('/testimoniales', paginaTestimoniales)
router.post('/testimoniales', guardarTestimonial)

export default router
