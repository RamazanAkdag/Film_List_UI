class Storage {
  static getFilmsFromStorage() {
    let films;
    if (localStorage.getItem("films") === null) {
      films = [];
    } else films = JSON.parse(localStorage.getItem("films"));
    return films;
  }
  static addFilmToStorage(newFilm) {
    let films = this.getFilmsFromStorage();
    if (films.findIndex((film) => film.name == newFilm.name) == -1) {
      //daha önce eklenmemiş
      films.push(newFilm);
    } else return;

    localStorage.setItem("films", JSON.stringify(films));
  }
  static deleteFilmFromStorage(deletingFilmName) {
    let films = this.getFilmsFromStorage();

    films.forEach((film, index) => {
      if (film.name == deletingFilmName) {
        films.splice(index, 1);
      }
    });
    localStorage.setItem("films", JSON.stringify(films));
  }
}
