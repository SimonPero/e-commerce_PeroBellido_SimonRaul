class Producto {
  constructor(titulo, detalle, stock, precio, imagen) {
    this.titulo = titulo,
      this.detalle = detalle,
      this.stock = stock,
      this.precio = precio,
      this.imagen = imagen
  }
}
let prod = new Producto("Mustang", "muy caro", 1, 1000000000, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg")

let id = parseInt(window.location.search.split("=")[1])
const foundProd = data.find((product) => product.id === id);

let counter = 0
let cardHtml = `
    <div class="card d-flex flex-column align-items-center" style="width: 18rem">
      <img src="${foundProd.img}"
          class="card-img-top"
          alt="imagen ${foundProd.title}"
          style="object-fit: cover; width: 100%; height: 150px;"
      />
      <div class="card-body d-flex flex-column">
        <p class="card-text">
          Titulo:${foundProd.title}
        </p>
        <p class="card-text">
          Price:${foundProd.price}
        </p>
        <p class="card-text">
          Stock:${foundProd.stock}
        </p>
        <p class="card-text">
          Category:${foundProd.category}
        </p>
        ${localStorage.getItem("session")
    ?
    `<div class="input-group mb-3">
        <button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="restButton()">-</button>
          <span class="form-control text-center shadow-none" id="number-counter" >${counter}</span>
          <button class="btn btn-outline-secondary" type="button" id="button-addon2" onclick="addButton()">+</button>
        </div>
        <button type="button" class="btn btn-dark" onclick="addButtonToCart()">Añadir al carrito</button>`
    :
    `<a class="text-decoration-none text-reset" href="./login.html"><button type="button" class="btn btn-dark">Tienes que inicar sesión para comprar</button></a>`
  }
      </div>
    </div>
  `;


document.querySelector(".producto").innerHTML = cardHtml
const numberCounter = document.querySelector("#number-counter")
function addButton() {
  if (counter < foundProd.stock) {
    counter += 1
    numberCounter.innerHTML = counter
  }
}

function restButton() {
  if (counter > 0) {
    counter -= 1
    numberCounter.innerHTML = counter
  }
}

let cart = JSON.parse(localStorage.getItem("cart"))
if (!cart) {
  cart = []
}

function addButtonToCart() {
  if (counter <= 0 || counter > foundProd.stock) return;

  const existingItemIndex = cart.findIndex(item => item.prod.id === foundProd.id);
  if (existingItemIndex > -1) {
    const existingItem = cart[existingItemIndex];
    const newQuantity = existingItem.quantity + counter;

    if (newQuantity <= foundProd.stock) {
      cart[existingItemIndex].quantity = newQuantity;
    } else {
      alert("No puedes solicitar una cantidad mayor al stock del producto");
    }
  } else {
    cart.push({ prod: foundProd, quantity: counter });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}
