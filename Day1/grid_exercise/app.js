var container = $('.container');

for (var i = 0; i < 100; i++) {
  var cell = $('<div>').addClass('cell');
  $(container).append(cell);
}

function updateGrid() {
  
  cells.forEach(function (cell) {
    var randomNum = Math.random();
    if (randomNum > 0.5) {
      cell.toggleClass('active');
    }
  });
}

setInterval (updateGrid, 1000);
