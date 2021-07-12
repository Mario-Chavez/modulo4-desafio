function addWorkCard(data) {
  const template = document.querySelector("#servicios-card-template");
  const conteinerEl = document.querySelector(".tercera-section__conteiner");

  template.content.querySelector(".tercera-section__titulo").textContent =
    data.titulo;

  template.content.querySelector(".contenedor-uno__p").textContent =
    data.descripcion;

  template.content.querySelector(".contenedor-uno__imagen").src = data.imagen;

  var clone = document.importNode(template.content, true);
  conteinerEl.appendChild(clone);
}

function getWorks() {
  return fetch(
    "https://cdn.contentful.com/spaces/fobzvqw7vi99/environments/master/entries?access_token=C9sE2bA6FdNYvS3DR6AFLJmTelnkn8xZaUbL8B2c8gc&&content_type=servicios"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const jsonContenido = data.items.map((item) => {
        const img = buscarEnAsset(item.fields.imagen.sys.id, data);
        const imagenUrl = img.fields.file.url;

        return {
          titulo: item.fields.titulo,
          descripcion: item.fields.descripcion,
          imagen: imagenUrl,
        };
      });
      return jsonContenido;
    });
}
function buscarEnAsset(id, data) {
  const arrayEncontrado = data.includes.Asset.find((asset) => {
    return asset.sys.id == id;
  });
  return arrayEncontrado;
}

function main() {
  getWorks().then(function (works) {
    for (const w of works) {
      addWorkCard(w);
    }
  });

  createHeader(document.querySelector(".header__conteiner"));
  createForm(document.querySelector(".formulario__container"));
  createFooter(document.querySelector(".footer__conteiner"));
}
main();
