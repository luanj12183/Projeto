function toggleMode() {
const html = document.documentElement
html.classList.toggle('light')

  
// pegar a tag img
const img = document.querySelector("#profile img")

// substituir a imagem
if (html.classList.contains("light")) { 

// se tiver light mode, adicionar  a imagem light
img.setAttribute("src", "./Assets/Avatar.png")
} else {

// se tiver sem light mode, manter a imagem normal 
img.setAttribute("src", "./Assets/Avatar-light.png")
 }
} 

const dica_pág = document.querySelector("=alt")

if (dica_pág.classList.contains("light")) {

img.setAttribute("src", "alt=Foto de Mayk Brito sorrindo, usando óculos escuros e jaqueta preta, sem barba e o fundo roxo e azul.")
} else {

img.setAttribute("src", "alt=Foto de Mayk Brito sorrindo, usando óculos de grau e jaqueta preta, sem barba e fundo roxo e azul.")
}

// Segunda forma e maior em fazer o botão trocar seu tema ao clicar nele //

// if(html.classList.contains('light')) {
   // html.classList.remove('light')
   // } else {
   // html.classList.add('light')
 //}
  //}