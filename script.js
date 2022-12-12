const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

const arrowhead = document.getElementById("arrow-div")
const header = document.querySelector("#main-head")

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle('active')
} )


toggleButton.addEventListener("click", () => {
  header.classList.toggle('hidden')
} )

toggleButton.addEventListener("click", () => {
  arrowhead.classList.toggle('hidden')
} )
