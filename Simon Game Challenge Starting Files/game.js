var gamepattern=[]
var buttonColors=["red", "blue", "green", "yellow"];
var userClickedPattern=[];
var level=0;
var started = false;

function startgame()
{
    $(document).keypress(function()
    {
        if(!started)
        {
            $("#level-title").text("Start");
            nextsequence();
            started=true;
        }
    });
    
}


startgame();




function animatePress(currentcolor)
{
    $("#"+currentcolor).addClass(" pressed")
    setTimeout(()=>{
        $("#"+currentcolor).removeClass("pressed")
    },100);
}

function gameover()
{
    $("body").addClass("game-over");
    setTimeout(()=>{
        $("body").removeClass("game-over");
    },200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    var audio=new Audio("sounds/wrong.mp3");
    audio.play();
    level=0;
    userClickedPattern=[];
    gamepattern=[];
    started=false;
    startgame();
}

function nextsequence()
{
    userClickedPattern=[];
    level+=1;
    var randomNumber=Math.round(Math.random()*3);
    var randomchosenColor=buttonColors[randomNumber];
    gamepattern.push(randomchosenColor);
    $("."+randomchosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    $("#level-title").text("Level  "+level);
    makesound(randomchosenColor);
}



//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamepattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamepattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextsequence();
        }, 1000);

      }

    } else {

            console.log("wrong");
            gameover();

    }

}







function makesound(color){
    console.log(color)
    var audio=new Audio("sounds/"+color+".mp3");
    audio.play();
}

//check which button is cliecked and handle it
$(".btn").on("click",function()
{
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    makesound(userChosenColor);
    animatePress(userChosenColor);
    console.log(userClickedPattern);
    console.log(gamepattern);
    checkAnswer(userClickedPattern.length-1);
}
)


