// Product Data
const products = {
  batman: { name: 'Golden Batman Keychain', price: 85, image: 'images/batman.jpg' },
  spiderman: { name: 'Spiderman Keychain', price: 180, image: 'images/spiderman.jpg' },
  superman: { name: 'Superman Keychain', price: 180, image: 'images/superman.jpg' }
};

// Add to cart function
function addToCart(productId) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(products[productId]);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Added to cart!');
}

// Product page rendering
if (window.location.pathname.includes('product.html')) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = products[id];

  if (product) {
    document.body.innerHTML = `
      <header class="navbar">
        <h1 class="logo">🛍️ Keychain Vault</h1>
        <nav>
          <a href="index.html">Home</a>
          <a href="cart.html">Cart</a>
          <a href="login.html">Login</a>
        </nav>
      </header>
      <div class="product-detail">
        <img src="${product.image}" alt="${product.name}" />
        <h2>${product.name}</h2>
        <p>Price: ${product.price} Tk</p>
        <button class="btn" onclick="addToCart('${id}')">Add to Cart</button>
      </div>
    `;
  }
}

// Cart page rendering
if (window.location.pathname.includes('cart.html')) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  let html = `
    <header class="navbar">
      <h1 class="logo">🛍️ Keychain Vault</h1>
      <nav>
        <a href="index.html">Home</a>
        <a href="cart.html" class="active">Cart</a>
        <a href="login.html">Login</a>
      </nav>
    </header>
    <section class="cart-section">
      <h2>Your Cart</h2>
  `;

  if (cart.length === 0) {
    html += `<p>Your cart is empty. <a href="index.html" class="btn">Shop Now</a></p>`;
  } else {
    let total = 0;
    html += `<ul>`;
    cart.forEach((item) => {
      total += item.price;
      html += `<li>${item.name} - ${item.price} Tk</li>`;
    });
    html += `</ul><h3>Total: ${total} Tk</h3>`;
  }

  html += `</section>`;
  document.body.innerHTML = html;
}


// --- Navbar Login/Profile + Logout Control ---
window.addEventListener('DOMContentLoaded', () => {
  const navLogin = document.getElementById('nav-login');
  const navLogout = document.getElementById('nav-logout');
  const loggedIn = localStorage.getItem('loggedIn');
  const user = JSON.parse(localStorage.getItem('user'));

  // If user is logged in
  if (loggedIn === 'true' && user) {
    if (navLogin) {
      navLogin.textContent = user.username || 'Profile';
      navLogin.href = 'profile.html';
    }
    if (navLogout) {
      navLogout.style.display = 'inline-block';
      navLogout.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('loggedIn');
        window.location.reload();
      });
    }
  } else {
    // If user is logged out
    if (navLogin) {
      navLogin.textContent = 'Login';
      navLogin.href = 'login.html';
    }
    if (navLogout) {
      navLogout.style.display = 'none';
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const loginLink = document.getElementById("loginLink");
  const profileLink = document.getElementById("profileLink");
  const logoutLink = document.getElementById("logoutLink");

  if (isLoggedIn) {
    loginLink.style.display = "none";
    profileLink.style.display = "inline-block";
    logoutLink.style.display = "inline-block";
  } else {
    loginLink.style.display = "inline-block";
    profileLink.style.display = "none";
    logoutLink.style.display = "none";
  }
});



// ✅ Add logout function here so it works on all pages
function logoutUser() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  const loginItem = document.getElementById("loginItem");
  const profileItem = document.getElementById("profileItem");
  const logoutItem = document.getElementById("logoutItem");

  if (isLoggedIn) {
    if (loginItem) loginItem.style.display = "none";
    if (profileItem) profileItem.style.display = "inline-block";
    if (logoutItem) logoutItem.style.display = "inline-block";
  } else {
    if (loginItem) loginItem.style.display = "inline-block";
    if (profileItem) profileItem.style.display = "none";
    if (logoutItem) logoutItem.style.display = "none";
  }
});

function logoutUser() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

