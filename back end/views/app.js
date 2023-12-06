const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const puerto = 3000;

app.use(express.json());

// Configuración de body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar EJS como motor 
app.set('view engine', 'ejs');
app.set('views', './views');


// Iniciar el servidor
app.listen(puerto, () => {
    console.log(`Servidor Express escuchando en el puerto ${puerto}`);
});



