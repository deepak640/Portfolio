// loading function

var loader = document.getElementById("loading")
window.addEventListener("load", function () {
  loader.style.display = "none";
})

// active tab

const activepage = window.location.pathname
const navlinks = document.querySelectorAll('nav a').forEach(link => {
  if (link.href.includes('index.html') && activepage.includes('Portfolio/')) {
    link.style.setProperty('--width', '100%')
    console.log(activepage);
  }
  else if (link.href.includes(`${activepage}`) && activepage.includes(link.href)) {
    console.log('nothing');
    const css = window.getComputedStyle(link, '::after')
    link.style.setProperty('--width', '100%')

  }
}); 