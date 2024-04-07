const container = document.querySelector(".libros");
const form = document.getElementById("search-form");
const search = document.getElementById("search");
let url = "http://localhost:3000/books/";

const fetchBooks = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const books = data.data || data;
      let innerHTML = "";
      for (const book of books) {
        innerHTML += "<div class='libro' id='" + book._id + "'>";
        innerHTML += `<p>${book._id}</p>`;
        innerHTML += "<h3 class='title'>" + book.titulo + "</h3>";
        innerHTML += "<div class='portada'>";
        innerHTML += "<img src='" + book.portada + "'>";
        innerHTML += "</div>";
        innerHTML += "<div class='datos'>";
        innerHTML += "<p class='descripcion'>" + book.descripcion + "</p>";
        innerHTML += "<p class='autor'><span>autor:</span>" + book.autor + "</p>";
        innerHTML += "<p class='fecha'>" + book.fecha_salida + "</p>";
        innerHTML += "</div>";
        innerHTML += `<button onclick="deletethis('${book._id}')" class="delete" id="delete">Borrar</button>`
        innerHTML += "</div>";
      }
      container.innerHTML = innerHTML;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const textSearch = search.value.trim();
  url = textSearch.length > 0 ? `http://localhost:3000/books/s/${textSearch}` : "http://localhost:3000/books";
  fetchBooks(url);
});

async function deletethis(id){
    const res=await fetch(url+"/"+id,{
        method:'DELETE',
        headers:{
            "Content-Type":"application/json"
        }
    })
    fetchBooks(url);
}
