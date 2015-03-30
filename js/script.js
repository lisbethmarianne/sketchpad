$(document).ready(function() {
  var squares = [];
  for (i = 0; i < 36; i++) {
    squares.push('<div class="square"></div>');
  }
  $("#container").append( squares.join('') );

  $(".square").mouseover(function(){
    $(this).addClass('red');
  });

});

