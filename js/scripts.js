var pokemonRepository = (function(){
  var pokemonList = [];
  var apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(item){
    pokemonList.push(item);
  }

  function getAll(){
    return pokemonList;
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function() {
      console.log(item);
    });
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
      showDetails("Hi, my name is " + pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
        // JSON used to exchange data back and forth with external servers
        return response.json();
        // If the promise is resolved, .then is run 
            }).then(function (json) {
        json.results.forEach(function (item) {
            var pokemon = {
                name: item.name,
                detailsUrl: item.url
            };
            add(pokemon);
        });
        // If the promise is rejected, .catch is run
    }).catch(function (e) {
        console.error(e);
    })
}

  function loadDetails(item) {
    var url = item.detailsUrl;
  return fetch(url).then(function (response) {
      return response.json();
  }).then(function (details) {
      // Adds the details to each item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
  }).catch(function (error) {
      console.error(error);
  });
}

function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
  });
}

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();



<<<<<<< HEAD
pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon.name);
})
=======
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
  });
});


>>>>>>> master
