async function registrarUsuario() {
  var userData = {
      login: {
          email: document.getElementById('email').value,
          password: document.getElementById('password').value,
      },
      contact: {
          fullName: document.getElementById('fullName').value,
          email: document.getElementById('email').value,
          phone: document.getElementById('phone').value,
      },
      address: {
          address: document.getElementById('address').value,
          postalCode: document.getElementById('postalCode').value
      }
  };

  try {
      // Realizar solicitud POST al backend
      const response = await fetch('http://localhost:3000/registro', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
      });

      if (response.ok) {
          // Si la respuesta es exitosa
          alert('Usuario registrado con éxito');
      } else {
          // En caso de error, notificar al usuario
          alert('Error al registrar usuario. Verifica tus datos e intenta nuevamente.');
      }
  } catch (error) {
      // En caso de error de red
      console.error('Error de red:', error);
      alert('Error de red. Intenta nuevamente más tarde.');
  }
}
function iniciarSesion() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Aquí puedes enviar los datos a un servidor para autenticar al usuario
  // Por ejemplo, puedes utilizar AJAX para enviar los datos a un script de servidor que maneje la autenticación.
  // Aquí simulamos una alerta con los datos ingresados
  alert('Correo Electrónico: ' + email + '\nContraseña: ' + password);
}
// Ruta para la página inicial
app.get('/', (req, res) => {
  // Envía el archivo HTML de la página inicial
  res.sendFile(path.join(__dirname, 'front end/inicio.html'));
});
app.use(cors());



