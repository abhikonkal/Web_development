var s1=Math.random(1,6);
var s2=Math.random(1,6);
s1=s1*6;
s2*=6;
s1=Math.floor(s1)+1;
s2=Math.floor(s2)+1;


ig1=document.querySelector(".img1").setAttribute("src","images/dice"+s1+".png");
ig2=document.querySelector(".img2").setAttribute("src","images/dice"+s2+".png");
var win=document.querySelector("h1");

if(s1>s2){
    win.innerHTML="Player 1 wins";
}

else if(s1==s2){
    win.innerHTML="Draw";
}

else{
    win.innerHTML="Player 2 Wins";
}
