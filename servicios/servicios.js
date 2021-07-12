function createServicios(el) {
  const serviciosEl = document.createElement("div");
  serviciosEl.innerHTML = `
  <div class="servicios">
    <div class="header__conteiner"></div>
    <h2 class="servicios__titulo">Servicios</h2>
    <div class="servicios__conteiner">
      <template id="servicios-card-template">
        <div class="servicios-uno">
            <div class="servicios-uno__img">
                <img class="servicios-uno__imagen" src="" alt="">
            </div>
            
            <h3 class="titulos-h3 servicios__h3">Hago cosas</h3>
            <p class="servicios-uno__p">Algo interesante sobre mi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui quam, sollicitudin at enim id, sodales vehicula velit. Aenean lobortis posuere tristique.</p>
            </div>
            </template>
            </div>
            </div>
            `;

  function addWorkCard(data) {
    const template = serviciosEl.querySelector("#servicios-card-template");
    const conteinerEl = serviciosEl.querySelector(".servicios__conteiner");

    template.content.querySelector(".servicios__h3").textContent = data.titulo;

    template.content.querySelector(".servicios-uno__p").textContent =
      data.descripcion;

    template.content.querySelector(".servicios-uno__imagen").src = data.imagen;

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

  getWorks().then(function (works) {
    for (const w of works) {
      addWorkCard(w);
    }
  });

  el.appendChild(serviciosEl);
}

function main() {
  createServicios(document.querySelector(".servicios-conteiner"));
  createHeader(document.querySelector(".header__conteiner"));
  createFooter(document.querySelector(".footer__conteiner"));
}
main();
