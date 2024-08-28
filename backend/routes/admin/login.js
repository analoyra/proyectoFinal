var express = require('express');
var router = express.Router();
var usuariosModel = require('../../modelos/usuariosModel');

// GET login form
router.get('/', (req, res) => {
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

// POST login
router.post('/', async function (req, res, next) {
  try {
    var username = req.body.username;
    var password = req.body.password;

    // Verificar que el nombre de usuario y la contraseña no sean undefined o vacíos
    if (!username || !password) {
      return res.render('admin/login', { 
        layout: 'admin/layout',
        error: 'El nombre de usuario y la contraseña son requeridos' 
      });
    }

    // Intentar obtener el usuario de la base de datos
    var data = await usuariosModel.getUserByUsernameAndPassword(username, password);

    console.log('Data retrieved from database:', data);

    if (data) {
      // Si el usuario es encontrado y la autenticación es exitosa
      req.session.username = data.usuario;
      req.session.nombre = data.nombre;
      return res.redirect('/admin/articulos'); // Redirecciona
    } else {
      // Si las credenciales son incorrectas
      return res.render('admin/login', { 
        layout: 'admin/layout',
        error: 'Credenciales inválidas' 
      });
    }

  } catch (error) {
    console.error("Error en el login:", error);
    return res.render('admin/login', { 
      layout: 'admin/layout',
      error: 'Ocurrió un error durante el login' 
    });
  }
});

// GET logout
router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.render('admin/login', { 
    layout: 'admin/layout'
  });
});

module.exports = router;
