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

// Parse the product ID from the URL
let id = parseInt(window.location.search.split("=")[1]);
const foundProd = data.find((product) => product.id === id);
document.querySelector("title").innerHTML = foundProd.title
if (!foundProd) {
  document.querySelector(".producto").innerHTML = `<p>Producto no encontrado</p>`;
} else {
  let counter = 0;

  let cardHtml = `
      <div class="card d-flex flex-column align-items-center" style="width: 18rem">
        <img src="${foundProd.img}"
            class="card-img-top"
            alt="imagen ${foundProd.title}"
            style="object-fit: cover; width: 100%; height: 150px;"
        />
        <div class="card-body d-flex flex-column">
          <p class="card-text">Titulo: ${foundProd.title}</p>
          <p class="card-text">Price: ${foundProd.price}</p>
          <p class="card-text">Stock: ${foundProd.stock}</p>
          <p class="card-text">Category: ${foundProd.category}</p>
          ${localStorage.getItem("session")
      ? `<div class="input-group mb-3">
            <button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="restButton()">-</button>
            <span class="form-control text-center shadow-none" id="number-counter">${counter}</span>
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" onclick="addButton()">+</button>
          </div>
          <button type="button" class="btn btn-dark" onclick="confirmAddToCart()">Añadir al carrito</button>`
      : `<a class="text-decoration-none text-reset" href="./login.html">
          <button type="button" class="btn btn-dark">Tienes que iniciar sesión para comprar</button>
        </a>`
    }
        </div>
      </div>
    `;

  document.querySelector(".producto").innerHTML = cardHtml;

  const numberCounter = document.querySelector("#number-counter");

  function addButton() {
    if (counter < foundProd.stock) {
      counter += 1;
      numberCounter.innerHTML = counter;
    }
  }

  function restButton() {
    if (counter > 0) {
      counter -= 1;
      numberCounter.innerHTML = counter;
    }
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function addButtonToCart() {
    if (counter <= 0 || counter > foundProd.stock) return;

    const existingItemIndex = cart.findIndex((item) => item.prod.id === foundProd.id);
    if (existingItemIndex > -1) {
      const existingItem = cart[existingItemIndex];
      const newQuantity = existingItem.quantity + counter;

      if (newQuantity <= foundProd.stock) {
        cart[existingItemIndex].quantity = newQuantity;
      } else {
        Toastify({
          text: "La cantidad que solicitas supera el stock del producto",
          className: "info",
          style: {
            background: "linear-gradient(to right, #ff5f6d, #ffc371)"
          }
        }).showToast();
        return false
      }
    } else {
      cart.push({ prod: foundProd, quantity: counter });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    return true
  }

  function confirmAddToCart() {
    Swal.fire({
      title: "¿Seguro quieres añadir este producto?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, añadirlo!"
    }).then((result) => {
      if (result.isConfirmed) {
        const exito = addButtonToCart();
        if (exito) {
          Toastify({
            text: "Has agregado correctamente tu elección",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)"
            }
          }).showToast();
        }
      }
    });
  }
}
