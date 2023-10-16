// Check code

//0 0 250 250

//GET STUFF
const button = document.querySelector('button');
const body = document.querySelector('body');
const input = document.querySelector('input');


//check check
//console.log( button );


// timer

const startingMinutes = 30;
let time = startingMinutes * 60;

let refreshInterval = setInterval(updateCountdown, 1000);

const countdownEl = document.getElementById('countdown');

function updateCountdown() {
  const minutes = Math.floor(time/60);
  let seconds = time % 60;
  
  minute = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  
  countdownEl.innerHTML = `${minute}:${seconds}`;
  time--;
  
  function hideInput(){
  if(time < 0){
    document.getElementById('code').hidden = true;
    document.getElementById('enter').hidden = true;
  }
}
  
 if (time < 0){
   clearInterval(refreshInterval);
   hideInput();
 }
  
}

function codeCheck(){
  
  var a = document.getElementById("code").value;
  
  if(a=="yith" || a=="Yith"  || a=="YITH"){
    console.log("accepted!");
    unlockGood();
  } 
  else if(a=="join" || a=="Join" || a=="JOIN"){
    console.log("you died!");
    unlockBad();
  }
  else{
    console.log("wrong!");
  }
  
};

button.addEventListener( 'click' , () => {
  
  codeCheck();

});


function unlockGood(){
gsap.timeline()
  .to('#lockArm', 
          {transformOrigin:'center center', rotate: -15, duration: 2, delay: 1 })
.to('#keyhole', {opacity: 0, duration: 0.5})
.fromTo(".eye", {transformOrigin: 'center center', opacity: 0, scaleY: 0}, {delay: 0.5, opacity: 1, scaleY: 2.25, duration: 2})
.to('#good', {visibility: "visible", delay: 1})}


function unlockBad(){
gsap.timeline()
  .to('#lockArm', 
          {transformOrigin:'center center', rotate: -15, duration: 2, delay: 1 })
.to('#keyhole', {opacity: 0, duration: 0.5})
.fromTo(".eye", {transformOrigin: 'center center', opacity: 0, scaleY: 0}, {delay: 0.5, opacity: 1, scaleY: 2.25, duration: 2})
.to('#bad', {visibility: "visible", delay: 1})}



// styling