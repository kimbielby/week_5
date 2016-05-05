$(document).on('ready', function () {
  var colors = [
    'lightblue',
    'orange',
    'purple',
    'pink',
    'yellow',
    'red'
  ]
  function fadeContainer() {
    $('.container').fadeToggle();
  }
  function setUnicornMode() {
    var randomNum = Math.floor(Math.random() * colors.length);
    $('h1').css('color', colors[randomNum]);
  }

  // console.log('Colors ------------');
  // colors.forEach(function(color) {
  //   console.log(color);
  // });

  $('button').each( function (i) {
    var button = $(this);
    button.on('click', function(event) {
      var id = $(event.currentTarget).attr('id');
      if (id === 'go-unicorn') {
        setUnicornMode();
      } else if (id === 'fade-out') {
        fadeContainer();
      }
    })
  })
});
