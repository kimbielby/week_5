var container = $('.container');
var cells = [];
for(var i = 0; i < 100; i++) {
  var cell = $('<div>').addClass('cell');
  cells.push(cell);
  container.append(cell);
}

$('.cell').on('click', function (event) {
  var elementClicked = event.currentTarget;
  $(elementClicked).addClass('active');
});




// function updateGrid() {
//   cells.forEach(function (cell) {
//     var randomNum = Math.random();
//     if (randomNum > 0.5) {
//       cell.toggleClass('active');
//     }
//   });
// }

// setInterval(updateGrid, 1000);
