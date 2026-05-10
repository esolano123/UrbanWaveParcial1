console.log("catalogo.js loaded");

const productsContainer = document.getElementById('productsContainer');

async function loadProducts() {

  try {

    const response = await fetch(
      'https://urbanwave-backend.onrender.com/api/products'
    );

    const products = await response.json();

    console.log(products);

    productsContainer.innerHTML = '';

    products.forEach(product => {

      productsContainer.innerHTML += `

        <div class="col-md-6 col-lg-3">

          <div class="card h-100 shadow product-card">

            <img
              src="${product.image}"
              class="card-img-top"
              alt="${product.name}"
              style="height:300px; object-fit:cover;"
            >

            <div class="card-body d-flex flex-column">

              <h5 class="card-title">
                ${product.name}
              </h5>

              <p class="card-text text-muted">
                ${product.category || ''}
              </p>

              <h6 class="fw-bold mb-3">
                $${product.price} MXN
              </h6>

              <p class="text-muted">
                Stock: ${product.stock}
              </p>

              <button
                class="btn btn-dark mt-auto"
                onclick='addToCart(${JSON.stringify(product)})'
              >
                Agregar al carrito
              </button>

            </div>

          </div>

        </div>

      `;

    });

  } catch (error) {

    console.error('Error loading products:', error);

  }

}

loadProducts();

function addToCart(product) {

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  cart.push(product);

  localStorage.setItem('cart', JSON.stringify(cart));

  alert(`${product.name} agregado al carrito`);

  updateCartCount();

}