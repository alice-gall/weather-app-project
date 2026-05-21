function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-bar");
  let city = document.querySelector("h1");
  city.innerHTML = searchInput.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
