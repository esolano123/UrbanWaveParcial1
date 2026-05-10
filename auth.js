const API_URL = 'https://urbanwave-backend.onrender.com/api/users';

// REGISTER

const registerForm = document.getElementById('registerForm');

if (registerForm) {

  registerForm.addEventListener('submit', async (e) => {

    e.preventDefault();

    const userData = {

      name: document.getElementById('name').value,

      email: document.getElementById('email').value,

      password: document.getElementById('password').value

    };

    try {

      const response = await fetch(API_URL, {

        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify(userData)

      });

      const data = await response.json();

      alert('Usuario registrado correctamente');

      console.log(data);

      window.location.href = 'login.html';

    } catch (error) {

      console.error(error);

      alert('Error registrando usuario');

    }

  });

}

// LOGIN

const loginForm = document.getElementById('loginForm');

if (loginForm) {

  loginForm.addEventListener('submit', async (e) => {

    e.preventDefault();

    const email = document.getElementById('loginEmail').value;

    const password = document.getElementById('loginPassword').value;

    try {

      const response = await fetch(API_URL);

      const users = await response.json();

      const user = users.find(
        u => u.email === email && u.password === password
      );

      if (user) {

        localStorage.setItem('loggedUser', JSON.stringify(user));

        alert(`Bienvenido ${user.name}`);

        window.location.href = 'index.html';

      } else {

        alert('Correo o contraseña incorrectos');

      }

    } catch (error) {

      console.error(error);

      alert('Error iniciando sesión');

    }

  });

}

function continueAsGuest() {

  localStorage.setItem(
    'loggedUser',
    JSON.stringify({
      name: 'Invitado'
    })
  );

  alert('Entraste como invitado');

  window.location.href = 'index.html';

}