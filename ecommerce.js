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

const arrImgs = [
  "https://media.vandal.net/i/864x486/8-2024/2024816155725_1.jpg.webp",
  "https://media.vandal.net/t200/102076/elden-ring-20216121316990_1.jpg",
  "https://www.somosxbox.com/wp-content/uploads/2019/05/gears-5-portada.jpg"
];

const images = document.querySelectorAll(".card img");

const numImages = images.length;

for (let i = 0; i < numImages && i < arrImgs.length; i++) {
  images[i].src = arrImgs[i];
}

