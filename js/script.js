$(document).ready(function() {
  // initial grid (25*25 divs)
  var squares = [];
  for (i = 0; i < (25*25); i++) {
    squares.push('<div class="square"></div>');
  }
  $(".container").append( squares.join('') );
  $(".container").children().height(19).width(19);
  
  // grid according to user input (doesn't really work very well, good values: 2,4,5,10,20,25,32)
  $(".quantity").on('keyup', function() {
    $( ".container" ).empty();
    var size = +$(this).val();
    var height = (500 / size)-1;
    squares = [];
    for (i = 0; i < (size * size); i++) {
      squares.push('<div class="square"></div>');
    }
    $(".container").append( squares.join('') );
    $(".container").children().height(height).width(height);
  });

  // change color when hovering over squares
  $(".container").on('mouseover', '.square', function(){
    $(this).addClass('highlight');
  });

  // clear grid (change back to initial color)
  $("button").on('click', function(){
    $('.square').removeClass('highlight');
  });
});