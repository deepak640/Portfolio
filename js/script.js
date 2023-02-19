// loading function

var loader = document.getElementById("loading")
window.addEventListener("load", function () {
  loader.style.display = "none";
})

// active tab

const activepage = window.location.pathname
const navlinks = document.querySelectorAll('nav a').forEach(link => {
  if (link.href.includes('index.html')) {
    if (activepage === '/' || activepage === '/Portfolio/' || link.href.includes(`${activepage}`)) {
      console.log(activepage);
      link.style.setProperty('--width', '100%')
    }
  }
  else if (link.href.includes(`${activepage}`)) {
    if ((`/Portfolio${activepage}` === `${link.href}` ||   `http://127.0.0.1:5500${activepage}` === `${link.href}`)) {
      console.log(`/Portfolio${activepage}`);
      const css = window.getComputedStyle(link, '::after')
      link.style.setProperty('--width', '100%')
    }
  }
}); 