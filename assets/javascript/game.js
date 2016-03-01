$( document ).ready(function() {
    var numberToGuess = Math.floor((Math.random() * 120) + 19);
    var counter = 0;
    var numbers = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)];
    $('#number').text(numberToGuess);
    for (var i=0; i< numbers.length; i++){
      var imageCrystal = $('<img>');
      
      imageCrystal.attr('data-num', numbers[i]);
      imageCrystal.attr('src', 'assets/images/red.png');
      imageCrystal.attr('alt', 'crystals');
      imageCrystal.addClass('crystalImage');
      $('#crystals').append(imageCrystal);
    }
    
    $('.crystalImage').on('click', function(){
      counter = counter + parseInt($(this).data('num'));
      
      $('#yourNumber').text(counter);
      if (counter == numberToGuess){
        alert ('You won!!!!');
      }else if( counter > numberToGuess){
        alert ('You lost!');
      }
    });
  });   