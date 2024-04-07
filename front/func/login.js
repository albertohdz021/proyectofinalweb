function submitForm() {
    const nombre = document.getElementById('.nombre').value;
    const contrasena = document.getElementById('.contrasena').value;
  
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nickname: nombre, password: contrasena })
    })
    .then(response => {
      if (response.ok) {
        document.getElementById('error-message').innerText = '';
        document.getElementById('success-message').innerText = 'Inicio de sesión exitoso!';
      } else {
        throw new Error('Error en la solicitud');
      }
    })
    .catch(error => {
      document.getElementById('success-message').innerText = '';
      document.getElementById('error-message').innerText = 'Error al iniciar sesión';
    });
  }
