const pokemonContainer = document.querySelector(".pokemon-container");
const spinner = document.querySelector("#spinner");
const primero = document.querySelector("#primero");
const segundo = document.querySelector("#segundo");
const tercero = document.querySelector("#tercero");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");


let limit = 5;
let offset = 1;



primero.addEventListener("click",()=>{
    if(offset = 1){
        removeChildNodes(pokemonContainer);
    fetchPokemons(offset, limit);
    }
} )

segundo.addEventListener("click",()=>{
    if(offset = 7){
    removeChildNodes(pokemonContainer);
    fetchPokemons(offset, limit);
    }
} )

tercero.addEventListener("click",()=>{
    if(offset = 13){
    removeChildNodes(pokemonContainer);
    fetchPokemons(offset, limit);
    }
} )

previous.addEventListener("click", () => {
  if (offset != 1) {
    offset -= 6;
    removeChildNodes(pokemonContainer);
    fetchPokemons(offset, limit);
  }
});

next.addEventListener("click", () => {
  offset += 6;
  removeChildNodes(pokemonContainer);
  fetchPokemons(offset, limit);
});

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);
      spinner.style.display = "none";
    });
}



function fetchPokemons(offset, limit) {
  spinner.style.display = "block";
  for (let i = offset; i <= offset + limit; i++) {
    fetchPokemon(i);
  }
}

function createPokemon(pokemon) {
  const flipCard = document.createElement("div");
  flipCard.classList.add("flip-card");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  flipCard.appendChild(cardContainer);

  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.other.dream_world.front_default;
  sprite.style.width="200px";
  sprite.style.height="200px";

  spriteContainer.appendChild(sprite);

  const number = document.createElement("p");
  number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;

  const type = document.createElement("p")
  type.classList.add("type");

  type.textContent = `Tipo : ${pokemon.types[0].type.name}`;




  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);

  card.appendChild(type);



  const cardBack = document.createElement("div");
  cardBack.classList.add("pokemon-block-back");

  cardBack.appendChild(progressBars(pokemon.stats));
  
  
  const button = document.createElement("button");
  button.classList.add("button");
  button.type = "button";
  button.innerText = "Ver más";
  
  cardBack.appendChild(button);


  cardContainer.appendChild(card);
  cardContainer.appendChild(cardBack);
  pokemonContainer.appendChild(flipCard);
}

function searchPokemon(event) {
  removeChildNodes(pokemonContainer);
  event.preventDefault();
  const { value } = event.target.pokemon;
  fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      buscarPokemon(data);
      spinner.style.display = "none";
    });
}

function buscarPokemon(data) {
  const flipCard = document.createElement("div");
  flipCard.classList.add("flip-card");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  flipCard.appendChild(cardContainer);

  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = data.sprites.other.dream_world.front_default;
  sprite.style.width="200px";
  sprite.style.height="200px";

  spriteContainer.appendChild(sprite);

  const number = document.createElement("p");
  number.textContent = `#${data.id.toString().padStart(3, 0)}`;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = data.name;

  const type = document.createElement("p")
  type.classList.add("type");

  type.textContent = `Tipo : ${data.types[0].type.name}`;




  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);

  card.appendChild(type);



  const cardBack = document.createElement("div");
  cardBack.classList.add("pokemon-block-back");

  cardBack.appendChild(progressBars(data.stats));
  
  
  const button = document.createElement("button");
  button.classList.add("button");
  button.type = "button";
  button.innerText = "Ver más";
  
  cardBack.appendChild(button);


  cardContainer.appendChild(card);
  cardContainer.appendChild(cardBack);
  pokemonContainer.appendChild(flipCard);
}

function progressBars(stats) {
  const statsContainer = document.createElement("div");
  statsContainer.classList.add("stats-container");

  for (let i = 0; i < 6; i++) {
    const stat = stats[i];

    const statPercent = stat.base_stat / 2 + "%";
    const statContainer = document.createElement("stat-container");
    statContainer.classList.add("stat-container");

    const statName = document.createElement("p");
    statName.textContent = stat.stat.name;

    const progress = document.createElement("div");
    progress.classList.add("progress");

    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    progressBar.setAttribute("aria-valuenow", stat.base_stat);
    progressBar.setAttribute("aria-valuemin", 0);
    progressBar.setAttribute("aria-valuemax", 200);
    progressBar.style.width = statPercent;

    progressBar.textContent = stat.base_stat;


    progress.appendChild(progressBar);
    statContainer.appendChild(statName);
    statContainer.appendChild(progress);

    statsContainer.appendChild(statContainer);
  }

  return statsContainer;
}
function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);
      spinner.style.display = "none";
    });
}



function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
function validar() {
  if ($('#txt_pokemon').val().length == 0) {
  alert('Ingrese un dato');
return fetchPokemons(offset, limit);
}
}

fetchPokemons(offset, limit);

