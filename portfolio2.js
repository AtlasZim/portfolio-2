let player= document.querySelector(".drop-zone");
let aboutme= document.querySelector(".flip-box");
let mywork= document.querySelector(".flip-box2");
let contactme= document.querySelector(".flip-box3");
let music= document.querySelector(".music")
let musicbox= document.querySelector(".playbutton")

document.querySelector(".flip-box").addEventListener("click", function() {
  window.location.href = "aboutme.html";
});

document.querySelector(".flip-box2").addEventListener("click", function() {
  window.location.href = "works.html"; // Make sure this file exists
});

document.querySelector(".flip-box3").addEventListener("click", function() {
  window.location.href = "contact.html";
});

document.querySelector(".playbutton").addEventListener("click", function () {
  document.getElementById(".record-audio").play();
  
});



