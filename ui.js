class UI {
  addFilmToUI(newFilm) {
    const filmTable = document.querySelector(".filmTable");
    filmTable.innerHTML += `<tr class="film-item">
    <td>
    <img
      src="${newFilm.url}"
      alt="${newFilm.name}"
    />
  </td>
  <td>
    ${newFilm.name}
  </td>
  <td><p>${newFilm.director}</p></td>
  <td><button class="deleteFilm submitBtn">delete film</button></td>
</tr>`;
  }
}
