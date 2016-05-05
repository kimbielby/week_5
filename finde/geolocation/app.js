$(function(){
  var baseUrl = 'https://maps.googleapis.com/maps/api/staticmap?';
  var APIKey = 'AIzaSyB_XbAovUQQprXqL7wS4q8AR71g9ZDdhxk'

  if ('geolocation' in navigator) {
    var button = $('#where_am_i');
    button.on({click:getLocation,displayMap});
  } else {
    alert("Geolocation is not available")
  }


  function getLocation() {
    console.log('Getting location...');
    navigator.geolocation.getCurrentPosition(onLocation, onError, options);
  };

  var options = {
    enableHighAccuracy:true
  };

  function onLocation(position) {
    console.log('Your latitude is ' + position.coords.latitude);
    console.log('Your longitude is ' + position.coords.longitude);
    document.getElementById('location').innerHTML = 'Lat: ' + position.coords.latitude + ', Lon: ' + position.coords.longitude
  }

  function onError(error) {
    console.error(error);
  }

  function displayMap(lon,lat) {
    var lat = lat.coords.latitude;
    var lon = lon.coords.longitude;
    console.log(lat + lon);
    var standardConfig = '&zoom=14&size=400x400&markers=color:blue%7Clabel:Me%7C'

    // $('img').attr('src', baseUrl+'center='+lat+','+lon+standardConfig+lat+','+lon+'&key='+APIKey)

    $('.container').append('<img src="'+baseUrl+'center='+lat+','+lon+standardConfig+lat+','+lon+'&key='+APIKey+'"id="map"/>');

    // document.getElementById('map').innerHTML = '<img src="'+baseUrl+'center='+lat+','+lon+standardConfig+lat+','+lon+'&key='+APIKey+'"id="map"/>'
  }
})
