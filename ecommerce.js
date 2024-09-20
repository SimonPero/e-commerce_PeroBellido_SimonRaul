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

document.querySelector("h1").innerHTML = "Productos"

let arrProds = [];

for (let i = 1; i < 10; i++) {
  const prod = `
    <div class="card d-flex flex-column align-items-center" style="width: 18rem">
      <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg"
           class="card-img-top"
           alt="imagen ${i}"
           style="object-fit: cover; width: 100%; height: 150px;"
      />
      <div class="card-body d-flex flex-column">
        <p class="card-text">
          Producto ${i}
        </p>
        <a href="/product.html"><button>Ver mas...</button></a>
      </div>
    </div>`;
  arrProds.push(prod);
}

document.querySelector(".container").innerHTML = arrProds.join('');