var typed = new Typed(".auto-type", {
      strings: [ "Coder", "Developer", "Student" ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
});
    
var loader = document.getElementById("loading")
window.addEventListener("load", function(){
  loader.style.display = "none";  
})