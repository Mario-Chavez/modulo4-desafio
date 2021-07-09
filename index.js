function addWorkCard(params = {}) {
  /* console.log(params); */
  const template = document.querySelector("#servicios-card-template");
  const conteinerEl = document.querySelector(".tercera-section__conteiner");

  template.content.querySelector(".tercera-section__titulo").textContent =
    params.titulo;

  template.content.querySelector(".contenedor-uno__p").textContent =
    params.texto;

  template.content.querySelector(".contenedor-uno__imagen").src = params.src;

  var clone = document.importNode(template.content, true);
  conteinerEl.appendChild(clone);
}

function main() {
  addWorkCard({
    titulo: "hola soy el titulo",
    texto:
      "aqui esperando a que argentina salga campeon despues de 35 años y quizas poder salir a dar una vuelta olimpica re manija con los pibes y tomando algo para pasar el rato",
    src: "https://image.freepik.com/foto-gratis/bandera-argentina_1401-57.jpg",
  });

  createHeader(document.querySelector(".header__conteiner"));
  createForm(document.querySelector(".formulario__container"));
  createFooter(document.querySelector(".footer__conteiner"));
}
main();
