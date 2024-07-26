function toggleMode() {
const html = document.documentElement
html.classList.toggle('light')

// pegar a tag img
const img= document.querySelector("#profile img")

// subistituir a img
if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a img light
    img.setAttribute("src", "./assets/assets/avatar-light.png")
    img.setAttribute("alt", "Foto do myke sorrindo, com barba e camisa preta fundo branco")
} else {
    //se tiver sem o light mode, manter a img normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto do myke sorrindo, com barba e camisa preta")
}











}
