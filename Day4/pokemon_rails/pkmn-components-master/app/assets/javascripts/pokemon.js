(function () {

  if (typeof window.PokemonApp === 'undefined') {
    window.PokemonApp = {};
  }

  var Pokemon = function (attr) {
    this._attr = attr;
    this.name = attr.name;
    this.height = attr.height;
    this.weight = attr.weight;
  }

  window.PokemonApp.Pokemon = Pokemon;

  Pokemon.prototype.render = function () {
    $('.js-pokemon-name').text(this.name);
    $('.js-pokemon-height').text(this.height);
    $('.js-pokemon-weight').text(this.weight);
    $('.modal').modal()
  }

})();
