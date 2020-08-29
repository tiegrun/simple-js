var pokemonRepository = (function(){
  var pokemonList = [];

  function add(item){
      pokemonList.push(item);
  }

  function getAll(){
    return pokemonList;
  }

  function showDetails(pokemon){
    console.log(pokemon);
  }

  function addListItem(pokemon){
    var unorderedList = document.querySelector(".pokemonsList");
    var listItem = document.createElement("li");
    var button = document.createElement("button");
    button.innerText = pokemon;
    button.classList.add("btn");
    listItem.appendChild(button);
    unorderedList.appendChild(listItem);
    button.addEventListener("click", function(){
      showDetails(pokemon);
    });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };
})();

pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon.name);
})

