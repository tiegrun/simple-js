var pokemonRepository = (function(){
  var pokemonList = [ 
    {
      name: "Venusaur",
      height: 2,
      weight: 100,
      types: ["grass", "poison"],
      abilities: ["chlorophyll", "overgrow"]
    },
    {
      name: "Charizard",
      height: 1.7,
      weight: 90.5,
      types: ["fire", "flying"],
      abilities: ["blaze", "solar power"],
    },
    {
      name: "Pidgeot",
      height: 1.5,
      weight: 39.5,
      types: ["flying", "normal"],
      abilities: ["keen eye", "tangled feet", "big pecks"]
    },
    {
      name: "Fearow",
      height: 1.2,
      weight: 38,
      types: ["flying", "normal"],
      abilities: ["keen eye", "sniper"]
    },
    {
      name: "Nidoking",
      height: 1.4,
      weight: 62,
      types: ["ground", "poison"],
      abilities: ["poison point", "rivalry", "sheer force"]
    },
    {
      name: "Slowbro",
      height: 1.6,
      weight: 78.5,
      types: ["psychic", "water"],
      abilities: ["oblivious", "own tempo", "regenerator"]
    }
  ];

  function add(item){
    if(typeof item === "object" && Object.keys(item).length === 5){
      pokemonList.push(item);
    }
    else{
      console.log(" Definetly, it is not a Pokemon ");
    }
  }

  function getAll(){
    return pokemonList;
  }

  return {
    getAll: getAll,
    add: add
  };
})();

var parasect = {
  name: "Parasect",
  height: 1.0,
  weight: 29.5,
  types: ["grass", "bug"],
  abilities: ["damp", "effect spore", "dry skin"]
};

pokemonRepository.add(parasect);

console.log(pokemonRepository.getAll().length);

pokemonRepository.getAll().forEach(function(pokemon){
  if(pokemon.height > 1.9){
    pokemon.height += " ( Wow, that’s big! ) ";
    document.write(pokemon.name + " " + " - " + pokemon.height + " ; " + "<br><br>" );
  }
  else{
      document.write(pokemon.name + " " + " - " + pokemon.height + " ; " + "<br><br>" );
    }
})