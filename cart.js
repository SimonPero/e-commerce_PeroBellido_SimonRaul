const cartItems = JSON.parse(localStorage.getItem("cart")) || [];


function addButton(id) {
    const existingItemIndex = cartItems.findIndex(item => item.prod.id === id);
    if (existingItemIndex < -1) return "error"
    const foundItem = cartItems[existingItemIndex];
    if (foundItem.quantity < foundItem.prod.stock) {
        console.log("add", foundItem)
        foundItem.quantity += 1
        localStorage.setItem("cart", JSON.stringify(cartItems))
        document.querySelector(`#prod-quantity-${foundItem.prod.id}`).innerHTML = foundItem.quantity
        document.querySelector(`#prod-price-${foundItem.prod.id}`).innerHTML = `$${foundItem.quantity * foundItem.prod.price}`
    }
}

function restButton(id) {
    const existingItemIndex = cartItems.findIndex(item => item.prod.id === id);
    if (existingItemIndex < -1) return "error"
    const foundItem = cartItems[existingItemIndex];
    if (foundItem.quantity > 1) {
        console.log("rest", foundItem)
        foundItem.quantity -= 1
        localStorage.setItem("cart", JSON.stringify(cartItems))
        document.querySelector(`#prod-quantity-${foundItem.prod.id}`).innerHTML = foundItem.quantity
        document.querySelector(`#prod-price-${foundItem.prod.id}`).innerHTML = `$${foundItem.quantity * foundItem.prod.price}`
    }
}

function deleteFromCart(id) {
    const existingItemIndex = cartItems.findIndex(item => item.prod.id === id);
    if (existingItemIndex < -1) return "error"
    cartItems.splice(1, existingItemIndex);
    localStorage.setItem("cart", JSON.stringify(cartItems))
    location.pathname = location.pathname
}

if (cartItems.length === 0) {
    document.querySelector(".cartProds").innerHTML = `
        <div class="alert alert-warning text-center" role="alert">
            No tienes productos en tu carrito
        </div>
    `;
} else {
    const cartHtml = cartItems.map((item) => {
        return `
<div class="card mb-3 shadow-sm" style="max-width: 45rem;">
  <div class="row g-0 align-items-center">
    <div class="col-md-4">
      <img src="${item.prod.img}" class="img-fluid rounded-start" alt="${item.prod.title}">
    </div>
    <div class="col-md-8">
      <div class="card-body d-flex flex-column justify-content-between h-100">
        <div>
          <h5 class="card-title">${item.prod.title}</h5>
          <p class="card-text text-muted">${item.prod.category}</p>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-3">
          <div class="d-flex align-items-center">
            <button class="btn btn-outline-secondary btn-sm me-2" onclick="addButton(${item.prod.id})">
              <i class="bi bi-caret-up-fill"></i>
            </button>
            <span id="prod-quantity-${item.prod.id}">${item.quantity}</span>
            <button class="btn btn-outline-secondary btn-sm ms-2" onclick="restButton(${item.prod.id})">
              <i class="bi bi-caret-down-fill"></i>
            </button>
          </div>
          <p class="fw-bold text-primary mb-0"  id="prod-price-${item.prod.id}">$${item.prod.price * item.quantity}</p>
          <i class="bi bi-trash" onclick="deleteFromCart(${item.prod.id})"></i>
        </div>
      </div>
    </div>
  </div>
</div>
    `;
    });
    document.querySelector(".cartProds").innerHTML = cartHtml.join(" ");
}
