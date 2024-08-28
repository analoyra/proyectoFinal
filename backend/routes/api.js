var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
var articulosModel = require('./../modelos/articulosModel');


// Ruta para obtener la lista de artículos en formato JSON
router.get('/articulos', async function (req, res, next) {
  try {
    let articulos = await articulosModel.getArticulos();
    res.json(articulos);
  } catch (error) {
    console.error('Error al obtener los artículos:', error);
    res.status(500).json({ error: 'Error al obtener los artículos' });
  }
});



  
    
// Ruta para mostrar la lista de artículos
router.get('/articulos', async function (req, res, next) { 
   let articulos = await articulosModel.getArticulos();

   articulos = articulos.map(articulo => {
    if (articulo.img_id) {
      const imagen = cloudinary.url(articulo.img_id, {
        width: 150,
        height: 150,
        crop: 'fill'
      });
      return {
        ...articulo,
        imagen
      }
    } else {
      return {
        ...articulo,
        imagen: ''
      }
    }
    
   
  });
    
      res.json(articulos);
    });
   
// Ruta para envio del contacto
    router.post('/contacto', async (req, res) => {
        const mail = {
          to: 'analoyra@yahoo.es',
          subject: 'Contacto sobre 3D',
          html: '${req.body.nombre} se contacto  ${req.body.email}<br> y comento ${req.body.mensaje} <br> quiere que lo contactes al  ${req.body.telefono}' 
        }
      
        const transport = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
          }
        })
        await transport.sendMail(mail)
      
        res.status(201).json({
          error: false,
          message: 'Su mensaje a sido enviado, le responderemos a la brevedad'
        })
      })
module.exports = router;
