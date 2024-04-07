const form = document.getElementById("book-registration-form");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const description =document.getElementById("description");
const price = document.getElementById("price");
const author = document.getElementById("author");
const releaseDate = document.getElementById("release-date");
const quantity = document.getElementById("quantity");
const review = document.getElementById("review");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const url = "http://localhost:3000/books"; 

  const book = {
    titulo: title.value,
    portada: cover.value,
    descripcion:description.value,
    precio: price.value,
    autor: author.value,
    fecha_salida: releaseDate.value,
    cantidad: quantity.value,
    resena: review.value
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.JSON)
      console.log("Success:", data); 
      alert("¡Libro añadido correctamente!");
      form.reset();
    })
    .catch((error) => {
      console.error("Error:", error); 
      alert("Ha ocurrido un error al registrar el libro");
    });
});
