$(document).ready(function() {
  // initial grid (25*25 divs)
  var squares = [];
  for (i = 0; i < (25*25); i++) {
    squares.push('<div class="square"></div>');
  }
  $('.container').append( squares.join('') );
  $('.container').children().height(19).width(19);
  
  // grid according to user input
  $('input[type=number]').on('keyup', function() {
    $('.container').empty();
    var numberOfSquares = +$(this).val();
    var squareSize = (500 / numberOfSquares)-1;
    squares = [];
    for (i = 0; i < (numberOfSquares * numberOfSquares); i++) {
      squares.push('<div class="square"></div>');
    }
    $('.container').append( squares.join('') );
    $('.container').children().height(squareSize).width(squareSize);
  });

  // checkbox options
  $('input[type=checkbox]').on('change', function() {
    $('input[type=checkbox]').prop('checked', false);
    $(this).prop('checked', true);
  
    // change color when hovering over squares
    $('.square').css({'background-color': 'grey', 'opacity': 1});
    $('.square').on('mouseenter', function(){

      // option 1 (one color only)
      if ($('#option1').prop('checked')) {
        $(this).css('background-color', 'red');

      // option 2 (random colors)
      } else if ($('#option2').prop('checked')) {
        $(this).css('background-color', 'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')');

      // option 3 (leave a trail)
      } else if ($('#option3').prop('checked')) {
        $(this).css('opacity', '0');
        $(this).animate({opacity: 1}, 800);
    
      // option 4 (multiple shades)
      } else if ($('#option4').prop('checked')) {
        var currentOpacity = $(this).css('opacity');
        if(currentOpacity > 0){
          $(this).css('opacity', currentOpacity - 0.1);
          console.log(currentOpacity);
        }
      }
    });
  });

  // clear grid (change back to initial color)
  $("button").on('click', function(){
    $('.square').css({'background-color': 'grey', 'opacity': 1});
  });
});