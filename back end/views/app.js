const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.json());

// Configuración de body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar EJS como motor 
app.set('view engine', 'ejs');
app.set('views', './views');

// Configuración de la conexión a MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ameghino282*',
    database: 'database_links',
    port: 3000,
});


// Rutas para operaciones de productos
app.post('/agregar-producto', (req, res) => {
    const { nombre, precio } = req.body;

  // Insertar un nuevo producto en la base de datos
    connection.query('INSERT INTO productos (nombre, precio) VALUES (?, ?)', [nombre, precio], (error, results) => {
    if (error) {
        console.error('Error al agregar producto:', error);
        res.status(500).json({ error: 'Error al agregar producto' });
    } else {
        res.json({ message: 'Producto agregado correctamente', productId: results.insertId });
    }
});
});

app.put('/actualizar-producto/:id', (req, res) => {
    const productId = req.params.id;
    const { nombre, precio } = req.body;

  // Actualizar un producto en la base de datos
    connection.query('UPDATE productos SET nombre = ?, precio = ? WHERE id = ?', [nombre, precio, productId], (error) => {
    if (error) {
        console.error('Error al actualizar producto:', error);
        res.status(500).json({ error: 'Error al actualizar producto' });
    } else {
        res.json({ message: 'Producto actualizado correctamente' });
    }
});
});

app.patch('/modificar-valor/:id', (req, res) => {
    const productId = req.params.id;
    const { nuevoPrecio } = req.body;

  // Modificar el valor de un producto en la base de datos
    connection.query('UPDATE productos SET precio = ? WHERE id = ?', [nuevoPrecio, productId], (error) => {
    if (error) {
        console.error('Error al modificar valor del producto:', error);
        res.status(500).json({ error: 'Error al modificar valor del producto' });
    } else {
        res.json({ message: 'Valor del producto modificado correctamente' });
    }
});
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
