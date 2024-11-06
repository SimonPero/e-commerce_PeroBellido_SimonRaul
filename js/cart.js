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
  console.log(cartItems)
  const existingItemIndex = cartItems.findIndex(item => item.prod.id === id);
  if (existingItemIndex === -1) return "error"
  cartItems.splice(existingItemIndex, 1);
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
<div class="card mb-3 shadow-sm" style="width: 40rem;">
  <div class="row g-0 align-items-center">
    <div class="col-3">
      <img src="${item.prod.img}" class="img-fluid rounded-start" alt="${item.prod.title}">
    </div>
    <div class="col-9">
      <div class="card-body d-flex align-items-center justify-content-between">
        <div class="d-flex flex-column me-3 ">
          <h6 style="width:10rem;" class="card-title text-nowrap overflow-hidden">${item.prod.title}</h6>
        </div>
        <div class="d-flex align-items-center">
          <div class="d-flex flex-column me-2">
            <button class="btn btn-outline-secondary btn-sm mb-2" onclick="addButton(${item.prod.id})">
              <i class="bi bi-caret-up-fill"></i>
            </button>
            <button class="btn btn-outline-secondary btn-sm" onclick="restButton(${item.prod.id})">
              <i class="bi bi-caret-down-fill"></i>
            </button>
          </div>
          <span id="prod-quantity-${item.prod.id}" style="width: 2rem; text-align: center;">${item.quantity}</span>
        </div>
        <div class="d-flex align-items-center">
          <p class="fw-bold text-primary mb-0 me-3" id="prod-price-${item.prod.id}" style="width: 5rem; text-align: right;">
            $${item.prod.price * item.quantity}
          </p>
          <i class="bi bi-trash cursor" onclick="deleteFromCart(${item.prod.id})"></i>
        </div>
      </div>
    </div>
  </div>
</div>
    `;
  });
  document.querySelector(".cartProds").innerHTML = cartHtml.join(" ");
}
