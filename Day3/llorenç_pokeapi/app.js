$(function () {

  var CharacterManager = function () {
    this.url = 'https://ironhack-characters.herokuapp.com/characters';
    this.characters = [];
  };

  CharacterManager.prototype.fetchCharacters = function () {
    var mySecret = 'secret';
    $.ajax({
      url: this.url,
      success: function (characters) {
        console.log(mySecret);
        this.characters = characters;
        this.render();
      }.bind(this),
      error: function (err) {
        console.log('some error');
      }
    })
  };

  function doSomething() {

  }
  // function style
  doSomething();


  CharacterManager.prototype.render = function () {
    $('.characters').empty();
    this.characters.forEach(function (character) {
      var text = character.name + ' is a ' + character.occupation;
      var element = $('<p>').text(text);
      $('.characters').append(element);
    });
  };

  // constructor style
  var manager = new CharacterManager();

  //method style
  manager.fetchCharacters();

  $('form').on('submit', function (e) {
    e.preventDefault();
    var name = $('#name').val();
    var occupation = $('#occupation').val();
    var weapon = $('#weapon').val();
    var character = {
      name: name,
      occupation: occupation,
      weapon: weapon
    };

    $.ajax({
      url: url,
      type: 'POST',
      data: character,
      success: function (res) {
        fetchCharacters();
      },
      error: function (err) {
        debugger
      }
    })
  })

});
