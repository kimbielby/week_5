(function () {

  if (typeof window.PokemonApp === 'undefined') {
    window.PokemonApp = {};
  }

  var Pokedex = function () {
    this.pokemon = [];
  }

  window.PokemonApp.Pokedex = Pokedex;

  function privateStuff() {}

  Pokedex.prototype.fetchPokemon = function (url) {
    var pokedex = this;
    $.ajax({
      method: 'get',
      url: url,
      success: function (response) {
        var pokemon = new window.PokemonApp.Pokemon(response);
        pokedex.pokemon.push(pokemon);
        pokemon.render();

        $.ajax({
          method: 'get',
          url: url,
          success: function (result) {
            debugger
            var pokemonPic = new window.PokemonApp.Pokemon(result);
            pokedex.pokemon.push(pokemonPic);
            pokemonPic.render();
          }
        })
      }
    })

  }
})();
