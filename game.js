var  buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $('#'+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio('sounds/'+name+'.mp3');
  audio.play();
}

function animatePress(currentColour) {
  $('#'+currentColour).addClass('pressed');
  setTimeout(function () {
    $('#'+currentColour).removeClass('pressed');
  },100);
}

$('.btn').on('click',function () {
  var bu = $(this).attr('id');
  userClickedPattern.push(bu);
  console.log(userClickedPattern);
  playSound(bu);
  animatePress(bu);
  nextSequence();
});
