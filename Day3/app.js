$(function () {
  var url = 'http://ironhack-characters.herokuapp.com/characters';
  $.ajax({
    url: url,
    method: 'GET',
    success: function (res) {
      //debugger
      for (i = 0; i < res.length; i++) {
        $('.character').append('<p>' + res[i].name + '</p>');
      }
    }
$('.submit').submit(function (event) {
  $.ajax({
    url: url,
    method: 'POST',
    success: function () {

    }
  })
})

  })
})
