// function pepperoni {
// $('btn-pepperonni').toggleClass('green-pepper')
//
// };

var lowPrice = 1;
var whiteSauce = 3;
var glutenFree = 5;
var totalPrice = 10;

var total = document.getElementById('total')

$('button').click(function () {
        if ($(this).hasClass('active'))
        {
            $(this).removeClass("active");
        }
        else {
          $(this).addClass("active");
        }

    });

$('.btn-pepperonni').click(function(){
    $('.pep').toggle();
    if ($(this).hasClass('active'))
    {
      totalPrice -= lowPrice;
    }
    else {
      totalPrice += lowPrice;
    }
});

$('.btn-mushrooms').click(function(){
    $('.mushroom').toggle();
    if ($(this).hasClass('active'))
    {
      totalPrice -= lowPrice;
    }
    else {
      totalPrice += lowPrice;
    }
});

$('.btn-green-peppers').click(function(){
    $('.green-pepper').toggle();
    if ($(this).hasClass('active'))
    {
      totalPrice -= lowPrice;
    }
    else {
      totalPrice += lowPrice;
    }
});

$('.btn-sauce').click(function(){
    $('.sauce').toggleClass('sauce-white');
    if ($(this).hasClass('active'))
    {
      totalPrice -= whiteSauce;
    }
    else {
      totalPrice += whiteSauce;
    }
});

$('.btn-crust').click(function(){
    $('.crust').toggleClass('crust-gluten-free');
    if ($(this).hasClass('active'))
    {
      totalPrice -= glutenFree;
    }
    else {
      totalPrice += glutenFree;
    }
});
