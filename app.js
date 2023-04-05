const filmForm = document.querySelector(".film-form");
const filmName = document.getElementById("name");
const filmDirector = document.getElementById("director");
const filmUrl = document.getElementById("imageFilm");

const filmTable = document.querySelector(".filmTable");

const ui = new UI();

function eventListeners() {
  filmForm.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", loadFilmsFromStorage);
  filmTable.addEventListener("click", deleteFilm);
}

eventListeners();
function addFilm(e) {
  let newFilm;
  const nameFilm = filmName.value.trim();
  const directorFilm = filmDirector.value.trim();
  const urlFilm = filmUrl.value.trim();
  newFilm = new film(nameFilm, directorFilm, urlFilm);

  ui.addFilmToUI(newFilm);
  Storage.addFilmToStorage(newFilm);
  filmName.value = "";
  filmDirector.value = "";
  filmUrl.value = "";

  e.preventDefault();
}
function loadFilmsFromStorage() {
  let films = Storage.getFilmsFromStorage();
  films.forEach((film) => {
    ui.addFilmToUI(film);
  });
}

function deleteFilm(e) {
  //console.log(e.target);
  if (e.target.className === "deleteFilm submitBtn") {
    let deletingFilm =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent;
    Storage.deleteFilmFromStorage(deletingFilm);
    e.target.parentElement.parentElement.remove();
  }

  e.preventDefault();
}
