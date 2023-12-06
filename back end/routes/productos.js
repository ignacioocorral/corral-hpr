const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');

// Ruta para crear un producto
router.post('/productos', async (req, res) => {
  try {
    const nuevoProducto = req.body;
    const productoCreado = await Producto.create(nuevoProducto);
    res.json({ mensaje: 'Producto creado exitosamente', producto: productoCreado });
  } catch (error) {
    console.error('Error al crear el producto:', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
});

module.exports = router;





// Ruta para actualizar un producto
router.put('/productos/:id', async (req, res) => {
    try {
    const idProducto = req.params.id;
    const datosActualizados = req.body;
    const productoActualizado = await Producto.update(datosActualizados, { where: { id: idProducto } });
    res.json({ mensaje: 'Producto actualizado exitosamente', id: idProducto, producto: productoActualizado });
    } catch (error) {
    console.error('Error al actualizar el producto:', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
    }
});




// Ruta para buscar todos los productos
router.get('/productos', async (req, res) => {
    try {
      const productos = await Producto.findAll();
      res.json(productos);
    } catch (error) {
    console.error('Error al buscar todos los productos:', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
    }
});





// Ruta para buscar producto por Id
router.get('/productos/:id', async (req, res) => {
    try {
    const idProducto = req.params.id;
    const productoEncontrado = await Producto.findByPk(idProducto);
    if (productoEncontrado) {
        res.json(productoEncontrado);
    } else {
        res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    } catch (error) {
    console.error('Error al buscar el producto por Id:', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
    }
});




// Ruta para crear un producto con validaciones
app.post('/productos', [
  // Validaciones con express-validator
  body('nombre').notEmpty().withMessage('El nombre del producto'),
  body('precio').isFloat().withMessage('El precio debe ser un número decimal'),

  // Manejo de errores de validación
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },


  (req, res) => {
    const nuevoProducto = req.body;
    res.json({ mensaje: 'Producto creado exitosamente', producto: nuevoProducto });
  },
]);
