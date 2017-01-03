const clock = () => {
  // let minuteHand = document.querySeleco;
  // let secondHand = 0;
  // let hourHand = 0;

let secondInt= 0;
let minuteInt = 0;
let hourInt =0;
setInterval(
  ()=>{
secondInt += 6;
minuteInt += .1;
hourInt += .1/12;
$('#second-hand').css({ 'transform': 'rotate(' + secondInt + 'deg)'})
$('#minute-hand').css({ 'transform': 'rotate(' + minuteInt + 'deg)'})
$('#hour-hand').css({ 'transform': 'rotate(' + hourInt + 'deg)'})

}, 100);

};


// slide animation

function openNav() {
    document.getElementById("mySidenav").style.width = "100vw";
    document.getElementById("main").style.marginRight = "0";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "53vw";
    document.getElementById("main").style.marginRight= "0px";
}


//carausel










document.addEventListener('DOMContentLoaded', () => {
  console.log('Clocks loaded');
  clock();
});
