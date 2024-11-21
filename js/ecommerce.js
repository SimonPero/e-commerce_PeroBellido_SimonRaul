function loadProds(categoria = "") {
  document.querySelector(".container").innerHTML = `
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>`;

  setTimeout(() => {
    let cards;

    if (categoria === "") {
      cards = data.map((product) => {
        return `
          <div class="card d-flex flex-column align-items-left" style="width:18rem;">
            <img src="${product.img}"
                class="card-img-top"
                alt="imagen ${product.title}"
                style="object-fit: cover; width: 100%; height: 150px;"
            />
            <div class="card-body d-flex flex-column text-nowrap">
              <div class="card-text overflow-x-hidden">
                Titulo: ${product.title}
              </div>
              <div class="card-text">
                Price: ${product.price}
              </div>
              <div class="card-text">
                Stock: ${product.stock}
              </div>
              <div class="card-text">
                Category: ${product.category}
              </div>
              <a href="./product.html?prod=${product.id}"><button type="button" class="btn btn-dark btn-sm">Ver mas...</button></a>
            </div>
          </div>
        `;
      });
    } else {
      cards = data.filter((product) => product.category === categoria).map((product) => {
        return `
          <div class="card d-flex flex-column align-items-center" style="width: 18rem">
            <img src="${product.img}"
                class="card-img-top"
                alt="imagen ${product.title}"
                style="object-fit: cover; width: 100%; height: 150px;"
            />
            <div class="card-body d-flex flex-column">
              <p class="card-text">
                Titulo: ${product.title}
              </p>
              <p class="card-text">
                Price: ${product.price}
              </p>
              <p class="card-text">
                Stock: ${product.stock}
              </p>
              <p class="card-text">
                Category: ${product.category}
              </p>
              <a href="./product.html?prod=${product.id}"><button type="button" class="btn btn-dark btn-sm">Ver mas...</button></a>
            </div>
          </div>
        `;
      });
    }

    // Actualiza el contenido de la container después del retraso
    document.querySelector(".container").innerHTML = cards.join('');
  }, 500);
}

loadProds()
const boton = document.querySelector(".boton")
const myCategories = document.querySelectorAll(".categoria")

boton.addEventListener("click", () => {
  const input = document.querySelector(".input")
  const filterData = data.filter((producto) => producto.title === input.value)

  const cards = filterData.map((product) => {
    return `
      <div class="card d-flex flex-column align-items-center" style="width: 18rem">
        <img src="${product.img}"
            class="card-img-top"
            alt="imagen ${product.title}"
            style="object-fit: cover; width: 100%; height: 150px;"
        />
        <div class="card-body d-flex flex-column">
          <p class="card-text>
            Titulo: ${product.title}
          </p>
          <p class="card-text ">
            Price: ${product.price}
          </p>
          <p class="card-text">
            Stock: ${product.stock}
          </p>
          <a href="./product.html?prod=${product.id}"><button type="button" class="btn btn-dark btn-sm">Ver mas...</button></a>
        </div>
      </div>
    `;
  });
  document.querySelector(".container").innerHTML = cards.join('');
})

for (const category of myCategories) {
  if (category.innerText === "Todos") {
    category.addEventListener("click", () => {
      loadProds()
    })
  } else {
    category.addEventListener("click", () => {
      loadProds(category.innerText)
    })
  }
}