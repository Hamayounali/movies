const cardContainer = document.querySelector('#cardBody');
const getData = async () => {
  const result = await fetch('https://pokeapi.co/api/v2/berry/');
  const data = await result.json();
  const dataSet = data.results;
  dataSet.forEach(async (item) => {
    const result = await fetch(item.url);
    const data = await result.json();
    const HTML = `<div class="col-lg-4 col-md-6 mb-5 ">
    <div class="card" style="width: 18rem;" id = "card">
      <div class = "text-center pt-3">
      <img id = "pokemonId" src = "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data.id}.svg" class="card-img-top img-fluid" alt="..."></div>
        <div class="card-body">
          <h5 class="card-title">${data.name.toUpperCase()}</h5>
          <p class="card-text border-start border-warning border-4 d-inline p-2">#-${data.id}</p>
          <div class="text-center">
            <a href="#" class="btn btn-warning text-center">Comment</a>
          </div>
        </div>
      </div>`;
    cardContainer.insertAdjacentHTML('beforeend', HTML);
  });
};
export default getData;