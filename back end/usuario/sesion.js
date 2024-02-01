const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Módulo para manejar rutas de archivos
const app = express();
const port = 3000;
const cors = require('cors');

function iniciarSesion() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Aquí puedes enviar los datos a un servidor para autenticar al usuario
    // Por ejemplo, puedes utilizar AJAX para enviar los datos a un script de servidor que maneje la autenticación.
    // Aquí simulamos una alerta con los datos ingresados
    alert('Correo Electrónico: ' + email + '\nContraseña: ' + password);
}
app.use(cors());
