var phrases = [
  'I love Banana Cake.',
  'You only fail when you stop trying.',
  '¡Toma Ya!',
  '¿What the frack?'
]


$('#button').on('click', function () {
  function showPhrase() {
    var randomNum = Math.floor(Math.random() * phrases.length);
    $('.container').text(phrases[randomNum]);
  };
  showPhrase();
});
