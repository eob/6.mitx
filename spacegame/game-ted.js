// Your game code goes here.
console.log("Hello!");

// function() {}

$(function() {
  var input = $('<input />');
  var score = $('<div>100</div>');

  $("#controls").append(score);
  $("#controls").append(input);

  var spaceship = $('.ship');
  // Just one
  spaceship.css('left', '150px');

  // With an object
  spaceship.animate({
    'left': '0px',
    'top': '10px',
    '-webkit-transform': 'rotate(45deg)'
  }, 1000);

  console.log('The ship LEFT is', spaceship.css('left'));

});
