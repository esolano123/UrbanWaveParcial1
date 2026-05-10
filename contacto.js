console.log("contacto.js loaded");

const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {

  e.preventDefault();

  const data = {

    nombre: document.getElementById('nombre').value,

    email: document.getElementById('email').value,

    mensaje: document.getElementById('mensaje').value

  };

  try {

    const response = await fetch(
      'https://urbanwave-backend.onrender.com/api/messages',
      {

        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)

      }
    );

    const result = await response.json();

    console.log(result);

    alert('Mensaje enviado');

    form.reset();

  } catch (error) {

    console.error("FETCH ERROR:", error);

  }

});