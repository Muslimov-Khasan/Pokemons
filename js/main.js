let elPokemonsList = $(".js-list");
let createPokemonItem = function(i){
    
let elNewLi = createElement("li", "w-25 mx-3 mb-4 bg-light")

let elNewImg = createElement("img", "pokemons-img card-img-top");
elNewImg.src = pokemons[i].img;
elNewImg.width = 300;
elNewImg.height = 300;

let elNewInfo = createElement("div", "card-body")

let elNewTitle = createElement("h3", "card-title text-center", pokemons[i].name);

let elNewText = createElement("p", "card-text text-center", pokemons[i].type.join(", "));

elNewInfo.append(elNewTitle, elNewText);
elNewLi.append(elNewImg, elNewInfo);
elPokemonsList.appendChild(elNewLi);
}

for (let i = 0; i < pokemons.length; i++) {
    createPokemonItem(i);
}

