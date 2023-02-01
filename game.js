var  buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
function nextSequence() {
  var userClickedPattern = [];
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $('#'+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  level+=1;
  $('#level-title').text('level '+level);

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
  var index = userClickedPattern.length;
  checkAnswer(index);
});

$(document).keypress(function (event) {
  console.log(event.key);
  if(started == false)
  {
    $('#level-title').text('level '+level);
    nextSequence();
    started = true;
  }
});

function checkAnswer(currentLevel) {
  if(currentLevel == gamePattern.length)
  {
    setTimeout(function () {
      nextSequence();
    },1000);
  }
  else {

    playSound('wrong');
    level= 0;
  }
}
