document.getElementById("status").innerHTML = "Online";
document.getElementById("status").style.color = "green";

window.onscroll = function() {myFunction()};
var navbar = document.querySelector(".header");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
    console.log(1)
  }
}

function copy(){
    var copyText = document.getElementById("svname");
    navigator.clipboard.writeText(copyText.innerText);
}