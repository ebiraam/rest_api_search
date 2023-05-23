// Haku käynnistyy, haetaan hakutermi lomakkeesta
var searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", function() {
  var searchQuery = document.getElementById("searchForm").value;

  // Tarkistetaan, onko localstoragessa haetun niminen pokemon
  var cachedPokemonData = localStorage.getItem(searchQuery);

  if (cachedPokemonData) {
    // Jos on, laitetaan löytyneen pokemin data välimuistin muuttujaan
    var pokemonData = JSON.parse(cachedPokemonData);
    // Käytä pokemonDataa sivulla
    // ...
  } else {
    // Jos apista löytyi pokemon, tallennetaan se välimuistimuuttujaan ja localstorageen
    fetch("https://pokeapi.com/pokemon/" + searchQuery)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Pokemon not found");
        }
      })
      .then(function(pokemonData) {
        // Näytetään haetun pokémonin tiedot sivulla
        // ...

        // Tallennetaan pokemonData välimuistimuuttujaan
        // ...

        // Tallennetaan pokemonData localstorageen
        localStorage.setItem(searchQuery, JSON.stringify(pokemonData));
      })
      .catch(function(error) {
        // Näytetään virheviesti "ei sen nimistä pokemonia"
        // ...
      });
  }
});
