const main = document.querySelector('main');
fetch(genresListHttp + new URLSearchParams({
  api_key: api_key
}))
.then(res => res.json())
.then(data => {
  data.genres.forEach(item => {
    fetchMoviesListByGenres(item.id, item.name);
  })
})
const fetchMoviesListByGenres = (id,genres) => {
  fetch(moviesDataHttp + new URLSearchParams({
    api_key : api_key,
    with_genres: id, 
  }))
  .then(res => res.json())
  .then(data => {
    makeCategoryElement(`${genres}_movies`, data.results);
  })
  .catch(err => console.log(err))
}
const makeCategoryElement = (category, data) => {


  document.main.innerHTML += `<div class="movie-list">

    <button class="pre-btn"><i class="fa-solid fa-angles-left"></i></button>

    <h1 class="movie-category">${category.split("_").join(" ")}</h1>

    <div class="movie-container" id="${category}">

    </div>

    <button class="nxt-btn"><i class="fa-solid fa-angles-right"></i></button>

  </div>`;

  makeCards(category, data);

  const makeCard = (id, data) => {
    const movieContainer = document.getElementById(id);
    data.forEach((item, i) => {
      if(item.backdrop_path == null){
        item.backdrop_path == item.poster_path;
        if(item.backdrop_path == null){
          return;
        }
      }
      movieContainer.innerHTML += `
      <div class="movie">
        <img src="${imgURL}${item.backdrop_path}" alt="" />
        <p class="movie-title">${item.title}</p>
      </div>
      `
    })
  }
}
