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

const card1 = `
    <div class="card d-flex flex-column align-items-center" style="width: 18rem">
      <img src="${prod.imagen}"
           alt="imagen ${prod.titulo}"
           style="object-fit: cover; width: 100%; height: 150px;"
      />
      <div class="card-body d-flex flex-column">
        <p class="card-text">
          Producto ${prod.titulo}
        </p>
        <p class="card-text">
          Producto ${prod.detalle}
        </p>
        <p class="card-text">
          Producto ${prod.precio}
        </p>
        <p class="card-text">
          Producto ${prod.stock}
        </p>
      </div>
    </div>`;

document.querySelector(".producto").innerHTML = card1