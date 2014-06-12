// Your game code goes here.
console.log("Hello!");

// function() {}

function moveElementRight($elem, amount) {
  var startpoint = $elem.position().left;
  var endpoint = startpoint + amount;
  $elem.animate({
    'left': endpoint + 'px'
  });
};

$(function() {
  var spaceship = $('.ship');

  var allBtns = $('button');

  allBtns.on('click', function(event) {
    var target = $(event.target);
    var name = target.attr('id');
    console.log(name);
    if (name == 'rightBtn') {
      moveElementRight(spaceship, 10);
    } else if (name == 'leftBtn') {
      moveElementRight(spaceship, -10);
    }
    event.preventDefault();
    event.stopPropagation();
  });

  var input = $('<input />');
  var score = $('<div>100</div>');

  $("#controls").append(score);
  $("#controls").append(input);

  // Just one
  // spaceship.css('left', '150px');

  // With an object
  spaceship.animate({
    'left': '0px',
    'top': '10px',
    '-webkit-transform': 'rotate(34deg)'
  }, 1000);

  console.log('The ship LEFT is', spaceship.css('left'));









});
