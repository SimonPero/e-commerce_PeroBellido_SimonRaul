function changeTheme() {
  const html = document.documentElement;
  const themeIcon = document.getElementById('themeIcon');

  if (html.getAttribute('data-bs-theme') === 'light') {
    html.setAttribute('data-bs-theme', 'dark');
    themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
  } else {
    html.setAttribute('data-bs-theme', 'light');
    themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
  }
}

document.querySelector("#title").innerHTML = "Productos"

let arrProds = [];

for (let i = 1; i < 9; i++) {
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
      </div>
    </div>`;
  arrProds.push(prod);
}

document.querySelector(".container").innerHTML = arrProds.join('');