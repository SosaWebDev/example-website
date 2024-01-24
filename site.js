
const h1 = document.querySelector('h1')
h1.textContent = "Julio's Website"

const copyright = document.querySelector('footer p')
copyright.textContent = "BLA"

const link = document.querySelector('.active')
link.style.color = "#ff0000"
link.style.textDecoration="underline"

const contactLink = document.querySelector('#contact')
contactLink.style. fontWeight = "bold";

const contactAlt = document.getElementById('contact')
contactAlt.style.textDecoration="underline"

const links = document.querySelectorAll('nav a')
links.forEach(link => link.style.display ='none')