// Your game code goes here.
console.log("Hello!");

// function() {}

function moveElementRight($elem, amount) {
  var startpoint = $elem.position().left;
  var endpoint = parseInt(startpoint + amount);
  var newCss = {
    'transition': '1s ease-in-out',
    '-webkit-transform': 'translate(' + endpoint + 'px, 0px)'
  };
  console.log(newCss);
  $elem.css(newCss);
};

function loadEnemies(enemyName) {

  var url = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  var data = {
    tags: enemyName,
    tagmode: "any",
    format: "json"
  };
  var promise = $.ajax({
    dataType: "json",
    url: url,
    data: data
  });
  $('img.enemy').remove();
  promise.done(function(data) {
    for (var i = 0; i < data.items.length; i++) {
      var imgLink = data.items[i].media.m;
      var newImg = $('<img class="enemy" src="' + imgLink + '" />');
      $('body').append(newImg);
    }
  });
  promise.fail(function(reason) {
    console.log(reason);
  });




//
//
//
//     .done(function( data ) {
//       $.each( data.items, function( i, item ) {
//         $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
//         if ( i === 3 ) {
//           return false;
//         }
//       });
//     });
// })();

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


  input.on('keyup', function(evt) {
    if (evt.keyCode == 13) {
      var enemyName = input.val();
      console.log("Your chosen enemy:", enemyName);
      loadEnemies(enemyName);
    }
  });






  // Just one
  // spaceship.css('left', '150px');

  // With an object
  spaceship.animate({
    'left': '30px',
    'top': '30px',
    '-webkit-transform': 'rotate(34deg)'
  }, 1000);

  console.log('The ship LEFT is', spaceship.css('left'));









});
