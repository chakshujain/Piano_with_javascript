var buttons = document.querySelectorAll("button");
var audio = document.querySelectorAll("audio");
var marq = document.querySelectorAll("marquee");



window.addEventListener("keydown",function(event){
  if(event.which===65)
  {
    buttons[0].className = "a"
    for(var i = 0;i<marq.length;i++){
      marq[i].textContent = "A"
    }
    for(var i = 0;i<audio.length;i++){
    audio[i].pause();
    audio[i].currentTime=0;
  }
    audio[0].play();
  }
})
window.addEventListener("keydown",function(event){
  if(event.which===83){
    buttons[1].className = "s"
    for(var i = 0;i<marq.length;i++){
      marq[i].textContent = "S"
    }

    for(var i = 0;i<audio.length;i++){
    audio[i].pause();
    audio[i].currentTime=0;
  }
  audio[1].play();}
})
window.addEventListener("keydown",function(event){
  if(event.which===68){
    buttons[2].className = "d"
    for(var i = 0;i<marq.length;i++){
      marq[i].textContent = "D"
    }
    for(var i = 0;i<audio.length;i++){
    audio[i].pause();
    audio[i].currentTime=0;
  }
  audio[2].play();}
})
window.addEventListener("keydown",function(event){
  if(event.which===70){
    buttons[3].className = "f"
    for(var i = 0;i<marq.length;i++){
      marq[i].textContent = "F"
    }
    for(var i = 0;i<audio.length;i++){
    audio[i].pause();
    audio[i].currentTime=0;
  }
  audio[3].play();}
})
window.addEventListener("keydown",function(event){
  if(event.which===71){
    buttons[4].className = "g"
    for(var i = 0;i<marq.length;i++){
      marq[i].textContent = "G"
    }
    for(var i = 0;i<audio.length;i++){
    audio[i].pause();
    audio[i].currentTime=0;
  }
  audio[4].play();}
})
window.addEventListener("keydown",function(event){
  if(event.which===72){
    buttons[5].className = "h"
    for(var i = 0;i<marq.length;i++){
      marq[i].textContent = "H"
    }
    for(var i = 0;i<audio.length;i++){
    audio[i].pause();
    audio[i].currentTime=0;
  }
  audio[5].play();}
})
window.addEventListener("keydown",function(event){
  if(event.which===74){
    buttons[6].className = "j"
    for(var i = 0;i<marq.length;i++){
      marq[i].textContent = "J"
    }
    for(var i = 0;i<audio.length;i++){
    audio[i].pause();
    audio[i].currentTime=0;
  }
  audio[6].play();}
})
window.addEventListener("keydown",function(event){
  if(event.which===75){
    buttons[7].className = "k"
    for(var i = 0;i<marq.length;i++){
      marq[i].textContent = "K"
    }
    for(var i = 0;i<audio.length;i++){
    audio[i].pause();
    audio[i].currentTime=0;
  }
  audio[7].play();}
})
window.addEventListener("keydown",function(event){
  if(event.which===76){
    buttons[8].className = "l"
    for(var i = 0;i<marq.length;i++){
      marq[i].textContent = "L"
    }
    for(var i = 0;i<audio.length;i++){
    audio[i].pause();
    audio[i].currentTime=0;
  }
  audio[8].play();}
})
window.addEventListener("keyup",function(event){
  if(event.which===65)
  {
    buttons[0].className = "white"
  }
})
window.addEventListener("keyup",function(event){
  if(event.which===83)
  {
    buttons[1].className = "black"
  }
})
window.addEventListener("keyup",function(event){
  if(event.which===68)
  {
    buttons[2].className = "white"
  }
})
window.addEventListener("keyup",function(event){
  if(event.which===70)
  {
    buttons[3].className = "black"
  }
})
window.addEventListener("keyup",function(event){
  if(event.which===71)
  {
    buttons[4].className = "white"
  }
})
window.addEventListener("keyup",function(event){
  if(event.which===72)
  {
    buttons[5].className = "black"
  }
})
window.addEventListener("keyup",function(event){
  if(event.which===74)
  {
    buttons[6].className = "white"
  }
})
window.addEventListener("keyup",function(event){
  if(event.which===75)
  {
    buttons[7].className = "black"
  }
})
window.addEventListener("keyup",function(event){
  if(event.which===76)
  {
    buttons[8].className = "white"
  }
})
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
 var heading = document.querySelector(".display-4");
  var blackbtn = document.querySelectorAll(".black");
   var whitebtn = document.querySelectorAll(".white");
 function changeHeadingColor() {
   temp = getRandomColor()
   heading.style.color = temp;
   blackbtn[0].style.color = temp;
   blackbtn[1].style.color = temp;
   blackbtn[2].style.color = temp;
   blackbtn[3].style.color = temp;

   whitebtn[0].style.color = temp;
   whitebtn[1].style.color = temp;
   whitebtn[2].style.color = temp;
   whitebtn[3].style.color = temp;
   whitebtn[4].style.color = temp;
 }
 setInterval("changeHeadingColor()",100);
