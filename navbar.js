function changeTheme() {
  const classes = document.getElementById("themeIcon").classList
  const attributes = document.querySelector("html").attributes
  if (classes[1] === "bi-moon-fill") {
    classes.remove("bi-moon-fill")
    classes.add("bi-sun-fill")
    attributes[1].value = "dark"
  } else if (classes[1] === "bi-sun-fill") {
    classes.remove("bi-sun-fill")
    classes.add("bi-moon-fill")
    attributes[1].value = "light"
  }
}

const navbar = `<div class="d-flex align-items-center ms-auto">
        <i class="bi bi-shop"></i>
        <p class="mb-0 ms-2">Sucursales</p>
        <p class="mb-0 ms-auto me-2">
          Envios a Neuquen sin cargo superando los $10.000
        </p>
      </div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="./home.html">Logo</a>
          <div class="d-flex align-items-center ms-auto">
          ${localStorage.getItem("session") ? `<span class="cursor me-3" onclick="logOut()">Cerrar sesión</span>` : `<a class="text-decoration-none text-reset me-3" href="./login.html"><span class="cursor">Iniciar sesión</span></a>`}
            <div class="input-icons position-relative me-3">
              <div class="d-flex" role="search">
                <input
                  class="form-control rounded-pill pe-5 input"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Search"
                />
                <i
                  class="bi bi-search position-absolute top-50 translate-middle-y end-0 me-3"
                ></i>
              </div>
            </div>
            <button class="btn btn-outline-success me-3 boton">Search</button>
            <i class="bi bi-cart2 me-3"></i>
            <button
              class="navbar-toggler me-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <button onclick="changeTheme()" id="themeToggle">
              <i class="bi bi-moon-fill" id="themeIcon"></i>
            </button>
          </div>
        </div>
      </nav>
      <div class="onlyCategorias d-flex justify-content-evenly">
      </div>`

function logOut() {
  localStorage.clear()
  location.href = location.href
}
document.querySelector("header").innerHTML = navbar
let categories = ["Accesorios Generales", "Conectividad y Periféricos", "Electro Hogar", "Hardware y Componentes", "Cámaras y Fotografía", "Todos"]
let htmlCategories = []
for (let category of categories) {
  htmlCategories.push(`<button class="unstyled-button categoria"><a class="text-decoration-none text-reset">${category}</a></button>`)
}
document.querySelector(".onlyCategorias").innerHTML = htmlCategories.join("")