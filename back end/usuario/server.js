const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Módulo para manejar rutas de archivos
const app = express();
const port = 3000;
const cors = require('cors');


// Middleware para analizar el cuerpo de las solicitudes como JSON
app.use(bodyParser.json());

// Ruta para la página inicial
app.get('/', (req, res) => {
    // Envía el archivo HTML de la página inicial
    res.sendFile(path.join(__dirname, 'front end/inicio.html'));
});
app.use(cors());

// Ruta para registrar usuario
app.post('/registro', (req, res) => {
    const userData = req.body;
    console.log('Datos de usuario recibidos:', userData);

    res.sendStatus(200); // Respondemos con un estado 200 (OK)
});




// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:3000/server`);
});