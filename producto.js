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

let data = [
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "detail": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    "img": "http://dummyimage.com/450x300.png/dddddd/000000",
    "price": 49,
    "stock": 12,
    "category": "Accesorios Generales"
  },
  {
    "id": 2,
    "title": "The Godfather",
    "detail": "Curabitur in libero ut massa volutpat convallis.",
    "img": "http://dummyimage.com/450x300.png/ff4444/ffffff",
    "price": 99,
    "stock": 8,
    "category": "Conectividad y Periféricos"
  },
  {
    "id": 3,
    "title": "The Dark Knight",
    "detail": "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    "img": "http://dummyimage.com/450x300.png/5fa2dd/ffffff",
    "price": 75,
    "stock": 5,
    "category": "Electro Hogar"
  },
  {
    "id": 4,
    "title": "Pulp Fiction",
    "detail": "Aliquam erat volutpat. In congue.",
    "img": "http://dummyimage.com/450x300.png/cc0000/ffffff",
    "price": 85,
    "stock": 9,
    "category": "Hardware y Componentes"
  },
  {
    "id": 5,
    "title": "Schindler's List",
    "detail": "In hac habitasse platea dictumst.",
    "img": "http://dummyimage.com/450x300.png/3e3e3e/ffffff",
    "price": 95,
    "stock": 4,
    "category": "Cámaras y Fotografía"
  },
  {
    "id": 6,
    "title": "The Lord of the Rings: The Return of the King",
    "detail": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    "img": "http://dummyimage.com/450x300.png/000000/ffffff",
    "price": 120,
    "stock": 7,
    "category": "Accesorios Generales"
  },
  {
    "id": 7,
    "title": "Forrest Gump",
    "detail": "Nulla mollis molestie lorem. Quisque ut erat.",
    "img": "http://dummyimage.com/450x300.png/000000/ffffff",
    "price": 55,
    "stock": 13,
    "category": "Conectividad y Periféricos"
  },
  {
    "id": 8,
    "title": "Inception",
    "detail": "Nulla ac enim.",
    "img": "http://dummyimage.com/450x300.png/000000/ffffff",
    "price": 100,
    "stock": 6,
    "category": "Cámaras y Fotografía"
  },
  {
    "id": 9,
    "title": "Fight Club",
    "detail": "Integer ac leo. Pellentesque ultrices mattis odio.",
    "img": "http://dummyimage.com/450x300.png/000000/ffffff",
    "price": 85,
    "stock": 8,
    "category": "Electro Hogar"
  },
  {
    "id": 10,
    "title": "The Matrix",
    "detail": "Morbi non quam nec dui luctus rutrum.",
    "img": "http://dummyimage.com/450x300.png/cc0000/ffffff",
    "price": 65,
    "stock": 15,
    "category": "Hardware y Componentes"
  },
  {
    "id": 11,
    "title": "Goodfellas",
    "detail": "Proin eu mi. Nulla ac enim.",
    "img": "http://dummyimage.com/450x300.png/cc0000/ffffff",
    "price": 75,
    "stock": 11,
    "category": "Accesorios Generales"
  },
  {
    "id": 12,
    "title": "The Lion King",
    "detail": "Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    "img": "http://dummyimage.com/450x300.png/dddddd/000000",
    "price": 45,
    "stock": 20,
    "category": "Conectividad y Periféricos"
  },
  {
    "id": 13,
    "title": "The Silence of the Lambs",
    "detail": "Sed ante.",
    "img": "http://dummyimage.com/450x300.png/000000/ffffff",
    "price": 95,
    "stock": 10,
    "category": "Electro Hogar"
  },
  {
    "id": 14,
    "title": "Saving Private Ryan",
    "detail": "Praesent id massa id nisl venenatis lacinia.",
    "img": "http://dummyimage.com/450x300.png/cc0000/ffffff",
    "price": 125,
    "stock": 3,
    "category": "Hardware y Componentes"
  },
  {
    "id": 15,
    "title": "Interstellar",
    "detail": "Maecenas tristique, est et tempus semper, est quam pharetra magna.",
    "img": "http://dummyimage.com/450x300.png/000000/ffffff",
    "price": 100,
    "stock": 5,
    "category": "Cámaras y Fotografía"
  },
  {
    "id": 16,
    "title": "The Avengers",
    "detail": "Mauris enim leo, rhoncus sed, vestibulum sit amet.",
    "img": "http://dummyimage.com/450x300.png/cc0000/ffffff",
    "price": 55,
    "stock": 18,
    "category": "Accesorios Generales"
  },
  {
    "id": 17,
    "title": "Gladiator",
    "detail": "Integer ac neque. Duis bibendum.",
    "img": "http://dummyimage.com/450x300.png/dddddd/000000",
    "price": 115,
    "stock": 2,
    "category": "Conectividad y Periféricos"
  },
  {
    "id": 18,
    "title": "Jurassic Park",
    "detail": "Morbi quis tortor id nulla ultrices aliquet.",
    "img": "http://dummyimage.com/450x300.png/cc0000/ffffff",
    "price": 70,
    "stock": 6,
    "category": "Electro Hogar"
  },
  {
    "id": 19,
    "title": "Spider-Man",
    "detail": "Suspendisse potenti.",
    "img": "http://dummyimage.com/450x300.png/000000/ffffff",
    "price": 80,
    "stock": 8,
    "category": "Hardware y Componentes"
  },
  {
    "id": 20,
    "title": "Iron Man",
    "detail": "Suspendisse potenti.",
    "img": "http://dummyimage.com/450x300.png/dddddd/000000",
    "price": 90,
    "stock": 10,
    "category": "Cámaras y Fotografía"
  },
  {
    "id": 21,
    "title": "Star Wars",
    "detail": "Curabitur gravida nisi at nibh.",
    "img": "http://dummyimage.com/450x300.png/cc0000/ffffff",
    "price": 120,
    "stock": 4,
    "category": "Accesorios Generales"
  },
  {
    "id": 22,
    "title": "Avatar",
    "detail": "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    "img": "http://dummyimage.com/450x300.png/000000/ffffff",
    "price": 100,
    "stock": 12,
    "category": "Conectividad y Periféricos"
  },
  {
    "id": 23,
    "title": "Titanic",
    "detail": "Donec vitae nisi.",
    "img": "http://dummyimage.com/450x300.png/000000/ffffff",
    "price": 65,
    "stock": 7,
    "category": "Electro Hogar"
  },
  {
    "id": 24,
    "title": "Jaws",
    "detail": "Mauris ullamcorper purus sit amet nulla.",
    "img": "http://dummyimage.com/450x300.png/dddddd/000000",
    "price": 85,
    "stock": 9,
    "category": "Hardware y Componentes"
  },
  {
    "id": 25,
    "title": "Toy Story",
    "detail": "In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    "img": "http://dummyimage.com/450x300.png/cc0000/ffffff",
    "price": 50,
    "stock": 14,
    "category": "Cámaras y Fotografía"
  },
  {
    "id": 26,
    "title": "The Incredibles",
    "detail": "Morbi a ipsum.",
    "img": "http://dummyimage.com/450x300.png/cc0000/ffffff",
    "price": 60,
    "stock": 16,
    "category": "Accesorios Generales"
  },
  {
    "id": 27,
    "title": "Finding Nemo",
    "detail": "Morbi porttitor lorem id ligula.",
    "img": "http://dummyimage.com/450x300.png/dddddd/000000",
    "price": 45,
    "stock": 19,
    "category": "Conectividad y Periféricos"
  },
  {
    "id": 28,
    "title": "Up",
    "detail": "Proin interdum mauris non ligula pellentesque ultrices.",
    "img": "http://dummyimage.com/450x300.png/000000/ffffff",
    "price": 55,
    "stock": 10,
    "category": "Electro Hogar"
  },
  {
    "id": 29,
    "title": "WALL-E",
    "detail": "In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    "img": "http://dummyimage.com/450x300.png/dddddd/000000",
    "price": 60,
    "stock": 8,
    "category": "Hardware y Componentes"
  },
  {
    "id": 30,
    "title": "Coco",
    "detail": "Suspendisse accumsan tortor quis turpis.",
    "img": "http://dummyimage.com/450x300.png/000000/ffffff",
    "price": 65,
    "stock": 9,
    "category": "Cámaras y Fotografía"
  },
  {
    "id": 31,
    "title": "Ratatouille",
    "detail": "Nullam varius.",
    "img": "http://dummyimage.com/450x300.png/cc0000/ffffff",
    "price": 70,
    "stock": 6,
    "category": "Accesorios Generales"
  },
  {
    "id": 32,
    "title": "Brave",
    "detail": "Aenean auctor gravida sem.",
    "img": "http://dummyimage.com/450x300.png/000000/ffffff",
    "price": 55,
    "stock": 7,
    "category": "Conectividad y Periféricos"
  },
  {
    "id": 33,
    "title": "Cars",
    "detail": "Donec ut dolor.",
    "img": "http://dummyimage.com/450x300.png/dddddd/000000",
    "price": 80,
    "stock": 6,
    "category": "Electro Hogar"
  },
  {
    "id": 34,
    "title": "The Lion King",
    "detail": "Nulla justo.",
    "img": "http://dummyimage.com/450x300.png/dddddd/000000",
    "price": 75,
    "stock": 5,
    "category": "Hardware y Componentes"
  },
  {
    "id": 35,
    "title": "Frozen",
    "detail": "Maecenas tincidunt lacus at velit.",
    "img": "http://dummyimage.com/450x300.png/cc0000/ffffff",
    "price": 50,
    "stock": 11,
    "category": "Cámaras y Fotografía"
  },
  {
    "id": 36,
    "title": "Moana",
    "detail": "Duis mattis egestas metus.",
    "img": "http://dummyimage.com/450x300.png/dddddd/000000",
    "price": 60,
    "stock": 14,
    "category": "Accesorios Generales"
  },
  {
    "id": 37,
    "title": "Zootopia",
    "detail": "Morbi odio odio, elementum eu, interdum eu.",
    "img": "http://dummyimage.com/450x300.png/cc0000/ffffff",
    "price": 75,
    "stock": 10,
    "category": "Conectividad y Periféricos"
  },
  {
    "id": 38,
    "title": "Big Hero 6",
    "detail": "Etiam pretium iaculis justo.",
    "img": "http://dummyimage.com/450x300.png/000000/ffffff",
    "price": 65,
    "stock": 5,
    "category": "Electro Hogar"
  },
  {
    "id": 39,
    "title": "The Jungle Book",
    "detail": "In hac habitasse platea dictumst.",
    "img": "http://dummyimage.com/450x300.png/000000/ffffff",
    "price": 95,
    "stock": 8,
    "category": "Hardware y Componentes"
  },
  {
    "id": 40,
    "title": "The Little Mermaid",
    "detail": "Nulla suscipit ligula in lacus.",
    "img": "http://dummyimage.com/450x300.png/cc0000/ffffff",
    "price": 85,
    "stock": 9,
    "category": "Cámaras y Fotografía"
  }
]

let id = parseInt(window.location.search.split("=")[1])
const card = data.find((product) => product.id === id);

let cardHtml = `
    <div class="card d-flex flex-column align-items-center" style="width: 18rem">
      <img src="${card.img}"
          class="card-img-top"
          alt="imagen ${card.title}"
          style="object-fit: cover; width: 100%; height: 150px;"
      />
      <div class="card-body d-flex flex-column">
        <p class="card-text">
          Titulo:${card.title}
        </p>
        <p class="card-text">
          Price:${card.price}
        </p>
        <p class="card-text">
          Stock:${card.stock}
        </p>
        <p class="card-text">
          Category:${card.category}
        </p>
        ${ 
          localStorage.getItem("session")
          ?
          `<button type="button" class="btn btn-dark">Comprar</button>`
          :
          `<a class="text-decoration-none text-reset" href="./login.html"><button type="button" class="btn btn-dark">Tienes que inicar sesión para comprar</button></a>`
        }
      </div>
    </div>
  `;


document.querySelector(".producto").innerHTML = cardHtml