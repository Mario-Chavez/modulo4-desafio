function createPortfolio(el) {
  const portfolioEl = document.createElement("div");
  portfolioEl.innerHTML = `
  <div class="portfolio">
        <h2 class="portfolio__titulo">Portfolio</h2>
        <div class="portfolio__conteiner">
        <template id="portfolio-card-template">
            <div class="portfolio-uno">
                <div class="portfolio-uno__img">
                    <img class="portfolio-uno__imagen" src="https://bolavip.com/export/sites/bolavip/img/2021/01/15/image_3.png_167611220.png" alt="">
                </div>
                
                <h3 class="titulos-h3 portfolio__h3">Hago cosas</h3>
                <p class="portfolio-uno__p">Algo interesante sobre mi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui quam, sollicitudin at enim id, sodales vehicula velit. Aenean lobortis posuere tristique.</p>
                <a class="portfolio-uno__enlace" href="#">Ver mas  <i class="fas fa-angle-double-right"></i></a>
                </div>
                </template>    
                </div>
                </div>
              `;

  function addWorkCard(data) {
    const template = portfolioEl.querySelector("#portfolio-card-template");
    const conteinerEl = portfolioEl.querySelector(".portfolio__conteiner");

    template.content.querySelector(".portfolio__h3").textContent = data.titulo;

    template.content.querySelector(".portfolio-uno__p").textContent =
      data.descripcion;

    template.content.querySelector(".portfolio-uno__imagen").src = data.imagen;
    template.content.querySelector(".portfolio-uno__enlace").href = data.url;

    var clone = document.importNode(template.content, true);

    conteinerEl.appendChild(clone);
  }
  function getWorks() {
    return fetch(
      "https://cdn.contentful.com/spaces/fobzvqw7vi99/environments/master/entries?access_token=C9sE2bA6FdNYvS3DR6AFLJmTelnkn8xZaUbL8B2c8gc&&content_type=portfolio"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const jsonContenido = data.items.map((item) => {
          const img = buscarEnAsset(item.fields.imagenDePortfolio.sys.id, data);
          const imagenUrl = img.fields.file.url;

          return {
            titulo: item.fields.titulo,
            descripcion: item.fields.descripcion,
            imagen: imagenUrl,
            url: item.fields.url,
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

  el.appendChild(portfolioEl);
}

function main() {
  createHeader(document.querySelector(".header__conteiner"));
  createFooter(document.querySelector(".footer__conteiner"));
  createPortfolio(document.querySelector(".portfolio-conteiner"));
}
main();
