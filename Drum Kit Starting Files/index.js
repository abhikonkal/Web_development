


var urlstring=["crash.mp3","kick-bass.mp3","snare.mp3","tom-1.mp3","tom-2.mp3","tom-3.mp3","tom-4.mp3"]
var img=["crash.png","kick.png","snare.png","tom1.png","tom2.png","tom3.png","tom4.png"]



var noofdrums=document.querySelectorAll("button").length

for(var i=0;i<noofdrums;i++){

    document.querySelectorAll(".drum")[i].style.backgroundImage="url('images/"+img[i]+"')";
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var buttonhtml=this.innerHTML;
        makesound(buttonhtml);
        buttonanimation(buttonhtml);
    })
}

document.addEventListener("keydown",function(event)
{
    makesound(event.key);
    buttonanimation(event.key);
})



function makesound(key){
    switch(key)
        {
            case "w":
                var audio0=new Audio("sounds/crash.mp3");
                audio0.play();
                break;
            case "a":
                var audio1=new Audio("sounds/"+urlstring[1]);
                audio1.play();
                break;
            case "s":
                var audio2=new Audio("sounds/"+urlstring[2]);
                audio2.play();
                break;
            case "d":
                var audio3=new Audio("sounds/"+urlstring[3]);
                audio3.play();
                break;
            case "j":
                var audio4=new Audio("sounds/"+urlstring[4]);
                audio4.play();
                break;
            case "k":
                var audio5=new Audio("sounds/"+urlstring[5]);
                audio5.play();
                break;
            case "l":
                var audio6=new Audio("sounds/tom-4.mp3");
                audio6.play();
                break;
            
        }
}

function buttonanimation(currkey){

    var button=document.querySelector("."+currkey);
    button.classList.add("pressed");
    setTimeout(() => {
        button.classList.remove("pressed");
    },100);

}