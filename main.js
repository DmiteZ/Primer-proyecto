  const buttonMenuOpen = document.getElementById("buttonMenuOpen")
const buttonMenuClose = document.getElementById("buttonMenuClose")
const menu = document.getElementById("menu")
const capa = document.getElementById("capaOpacity")

buttonMenuOpen.addEventListener("click", () => {
  menu.classList.add("active")
  capa.classList.add("active")
})

buttonMenuClose.addEventListener("click", () => {
  menu.classList.remove("active")
  capa.classList.remove("active")
})

// HACER APARECER CUANDO UNA SECTION ESTE EN EL VIEWPORT
const groupAnimation = document.getElementById("group__animation");
const aboutUsAnimation = document.getElementById("aboutUsAnimation");
const descriptionAnimation = document.getElementById("descriptionAnimation");
const comprobationAnimation = document.getElementById("comprobationAnimation");
const misionVisionAnimation = document.getElementById("misionVisionAnimation")

const mostrarElemento = (entradas) => {
  entradas.forEach((entrada)=>{
    if(entrada.isIntersecting){
      entrada.target.classList.add('visible');
    }else{
      entrada.target.classList.remove('visible');
    }
  })
}

const observador = new IntersectionObserver(mostrarElemento, {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: .5
});

observador.observe(groupAnimation);
observador.observe(aboutUsAnimation);
observador.observe(descriptionAnimation);
observador.observe(comprobationAnimation);
observador.observe(misionVisionAnimation);

// Esconder sectiones 8

// ANCHOR
const contentS8OC = document.getElementById("contentS8OC");
const contentS8OC2 = document.getElementById("contentS8OC2");
const contentS8OC3 = document.getElementById("contentS8OC3");
const contentS8OC4 = document.getElementById("contentS8OC4");
// ELEMENTO A OCULTAR
const contentS8Hidden = document.getElementById("contentS8Hidden");
const contentS8Hidden2 = document.getElementById("contentS8Hidden2");
const contentS8Hidden3 = document.getElementById("contentS8Hidden3");
const contentS8Hidden4 = document.getElementById("contentS8Hidden4");
//BOTON A CAMBIAR SU CONTENIDO
const btnS8Text = document.getElementById("btn__S8text");
const btnS8Text2 = document.getElementById("btn__S8text2");
const btnS8Text3 = document.getElementById("btn__S8text3");
const btnS8Text4 = document.getElementById("btn__S8text4");

// Cuando usar funciones
// 1. Cuando veo que se repite el c??ddigo
// 2. Cual es la parte que no se repite

const groupOfButtons = [
  [
    contentS8Hidden,
    btnS8Text
  ],
  [
    contentS8Hidden2,
    btnS8Text2
  ],
  [
    contentS8Hidden3,
    btnS8Text3
  ],
  [
    contentS8Hidden4,
    btnS8Text4
  ]
]

function closeAllContent() {
  groupOfButtons.forEach(([content, buttonText]) => {
    console.log(content, buttonText)
    content.className = ""
    buttonText.textContent = "+"
  })
}

function addEventToContent(button, contentToHidden, buttonContent) {
  button.addEventListener("click", () => {
    closeAllContent()
    if (contentToHidden.className == "") {
      contentToHidden.className = "textS8--mostrar";
      buttonContent.textContent = "X";
    }else{
      contentToHidden.className = "";
      buttonContent.textContent = "+";
    }
  })
}

addEventToContent(contentS8OC, contentS8Hidden, btnS8Text)
addEventToContent(contentS8OC2, contentS8Hidden2, btnS8Text2)
addEventToContent(contentS8OC3, contentS8Hidden3, btnS8Text3)
addEventToContent(contentS8OC4, contentS8Hidden4, btnS8Text4)