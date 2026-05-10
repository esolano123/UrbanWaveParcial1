function updateCartCount() {

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    const cartCount = document.getElementById('cartCount');
  
    if (cartCount) {
  
      cartCount.innerText = cart.length;
  
    }
  
  }
  
  updateCartCount();