var pokemonRepository = (function(){
  var pokemonList = [];
  var apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(item){
    pokemonList.push(item.name);
  }

  function getAll(){
    return pokemonList;
  }

  function showDetails(pokemon){
    loadDetails(pokemon).then(function(){
      console.log(pokemon);
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
      showDetails(pokemon);
    });
  }

  function loadList(){
    return fetch(apiUrl)
    .then(function (response){
      return response.json();
    })
    .then(function(json){
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        // add(pokemon);
      });
    })
    .catch(function(e){
      console.error(e);
    })
  }

  // function loadDetails(item){
  //   var url = item.detailsUrl;
  //   return fetch(url)
  //   .then(function (response){
  //     return response.json();
  //   })
  //   .then(function(details){
  //     item.imageUrl = details.sprites.front_default;
  //     item.height = details.height;
  //     item.types = details.types;
  //   })
  //   .catch(function (e){
  //     console.error(e);
  //   });
  // }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
        return response.json();
    }).then(function (details) {
        // Adds the details to each item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;

    }).catch(function (error) {
        console.error(error);
    });
}

  return{
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
