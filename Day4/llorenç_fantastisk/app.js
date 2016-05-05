var numButtons = 10;
$(function () {
  for(var i = 0; i < numButtons; i++) {
    var button = $('<button>').text('Click Me!');
    $('.container').append(button);
  }

  function creator(index) {
    return function() {
      console.log('Element clicked: ' + index);
    }
  }

  for (var j = 0; j < numButtons; j++) {
    var buttonElement = $('button')[j];
    $(buttonElement).on('click', creator(j));
  }
});var numButtons = 10;
$(function () {
  for(var i = 0; i < numButtons; i++) {
    var button = $('<button>').text('Click Me!');
    $('.container').append(button);
  }

  function creator(index) {
    return function() {
      console.log('Element clicked: ' + index);
    }
  }

  for (var j = 0; j < numButtons; j++) {
    var buttonElement = $('button')[j];
    $(buttonElement).on('click', creator(j));
  }
});