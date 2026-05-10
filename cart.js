function updateCartCount() {

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const cartCount = document.getElementById('cartCount');

  if (cartCount) {

    cartCount.innerText = cart.length;

  }

}

updateCartCount();

async function checkout() {

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  try {

    for (const item of cart) {

      // Prevent negative stock
      if (item.stock <= 0) {
        alert(`${item.name} ya no tiene stock disponible`);
        continue;
      }

      const updatedStock = item.stock - 1;

      await fetch(
        `https://urbanwave-backend.onrender.com/api/products/${item._id}`,
        {

          method: 'PUT',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({
            stock: updatedStock
          })

        }
      );

    }

    localStorage.removeItem('cart');

    updateCartCount();

    alert('Compra realizada correctamente');

    window.location.href = 'catalogo.html';

  } catch (error) {

    console.error(error);

    alert('Error procesando compra');

  }

}