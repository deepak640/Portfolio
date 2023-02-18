// loading function

var loader = document.getElementById("loading")
window.addEventListener("load", function () {
  loader.style.display = "none";
})

// active tab

const activepage = window.location.pathname
const navlinks = document.querySelectorAll('nav a').forEach(link => {
  if (link.href.includes(`${activepage}`)) {
    const css = window.getComputedStyle(link, '::after')
    link.style.setProperty('--width','100%')

  }
}); 