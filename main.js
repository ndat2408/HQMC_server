window.onscroll = function() {myFunction()};
var navbar = document.querySelector(".header");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var hour = new Date().getHours()
if (hour >=8 && hour <12) {
  document.getElementById('status').innerText = "(Server đang mở)";
  document.getElementById('status').style.color = "green";
} else {
  document.getElementById('status').innerText = "(Server đã đóng)";
  document.getElementById('status').style.color = "red";
}

document.querySelector(".modal").onclick = function(){
  console.log(1)
}

function openmodal(){
  document.querySelector(".modal").style.display = "block"
}

function closemodal(){
  document.querySelector(".modal").style.display = "none"

}

function copy(e){
  navigator.clipboard.writeText("THPTHQ.aternos.me");
  e.classList.remove("fas")
  e.classList.add("far")
}