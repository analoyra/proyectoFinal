const express = require('express');
const router = express.Router();
const articulosModel = require('./../../modelos/articulosModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

// Ruta para mostrar la lista de artículos
router.get('/', async function (req, res, next) {
  try {
    var articulos = await articulosModel.getArticulos();

    articulos = articulos.map(articulo => {
      if (articulo.img_id) {
        const imagen = cloudinary.image(articulo.img_id, {
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

    res.render('admin/articulos', {
      layout: 'admin/layout',
      usuario: req.session.nombre,
      articulos
    });
  } catch (error) {
    console.error("Error al obtener artículos:", error);
    next(error);
  }
});

// Ruta para mostrar el formulario de agregar
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout',
  });
});

// Ruta para procesar el formulario de agregar
router.post('/agregar', async (req, res, next) => {
  try {
    let img_id = '';

    // Manejo de la subida de imágenes
    if (req.files && req.files.imagen) {
      let imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    // Verifica que todos los campos estén completos
    if (req.body.articulo != "" &&
      req.body.descripcion != "" &&
      req.body.precio != "") {
      await articulosModel.insertArticulo({
        ...req.body,
        img_id
      });

      res.redirect('/admin/articulos');
    } else {
      // Si falta algún campo, renderizar el formulario con un mensaje de error
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: "Todos los campos son requeridos",
      });
    }
  } catch (error) {
    console.error('Error al agregar artículo:', error);
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: "El artículo no se pudo dar de alta",
    });
  }
});

router.get('/eliminar/:id', async (req, res, next) => {
  try {
    var id = req.params.id;
    let articulo = await articulosModel.getArticuloById(id);
    if (articulo.img_id) {
      await destroy(articulo.img_id);
    }

    await articulosModel.deleteArticulo(id);
    res.redirect('/admin/articulos');
  } catch (error) {
    console.error("Error al eliminar artículo:", error);
    next(error);
  }
});

router.get('/modificar/:id', async (req, res, next) => {
  try {
    let id = req.params.id;
    let articulo = await articulosModel.getArticuloById(id);
    res.render('admin/modificar', {
      layout: 'admin/layout',
      articulo
    });
  } catch (error) {
    console.error("Error al obtener artículo:", error);
    next(error);
  }
});

router.post('/modificar', async (req, res, next) => {
  try {
    let img_id = req.body.img_original;
    let borrar_img_vieja = false;

    if (req.body.img_borrar === "1") {
      img_id = null;
      borrar_img_vieja = true;
    } else if (req.files && req.files.imagen) {
      let imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
      borrar_img_vieja = true;
    }

    if (borrar_img_vieja && req.body.img_original) {
      await destroy(req.body.img_original);
    }

    let obj = {
      articulo: req.body.articulo,
      descripcion: req.body.descripcion,
      precio: req.body.precio,
      img_id
    };

    await articulosModel.modificarArticulo(obj, req.body.id);
    res.redirect('/admin/articulos');
  } catch (error) {
    console.error("Error al modificar artículo:", error);
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modificó el artículo'
    });
  }
});

module.exports = router;
