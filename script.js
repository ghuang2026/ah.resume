let text = document.getElementById('text');
let plant1 = document.getElementById("plant 1");
let plant2 = document.getElementById("plant 2");
let plant3 = document.getElementById("plant 3");
let plant4 = document.getElementById("plant 4");
let plant5 = document.getElementById("plant 5");

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    plant2.style.bottom = 225 + value * 0.75 + 'px';
    plant1.style.left = 0 - value * 0.75 + 'px';
    plant4.style.left = 1050 + value * 1 + 'px';
    plant3.style.left = 925 + value * 0.65 + 'px';
    plant5.style.left = 80 - value * 0.5 + 'px';
})

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("hills");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); 
}