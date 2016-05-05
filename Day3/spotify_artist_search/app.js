$(function () {
  var baseUrl = 'https://api.spotify.com/v1/search?type=artist&query=';

  $('form').on('submit', function (e) {
    e.preventDefault();
    var name = $('#nameId').val();
    var url = baseUrl + name
    $.ajax({
      url: url,
      method: 'GET',
      success: function (result) {
        $('.container').empty();
        for (var i = 0; i < result.artists.items.length; i++) {
          var artistName = result.artists.items[i].name;
          var imagePath = result.artists.items[i].images[0].url;
          var pTag = $('<p>').attr({'data-toggle':'modal', 'data-target':'#myModal'}).text(artistName);
          // debugger
          $('.container').append(pTag);
          $('.container').append('<img src="'+imagePath+'"/>');

          giveClickPower();
        }

        $('#nameId').val('');

      }
    })
  });

  function giveClickPower() {
    $('p').on('click', function() {
      jQuery.noConflict();
      $('#myModal').modal('show');
    });
  }
});
