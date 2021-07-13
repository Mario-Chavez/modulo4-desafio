function createForm(el) {
  const formEl = document.createElement("div");
  formEl.innerHTML = `
    <div class="formulario">
    <h2 class="titulos formulario__titulo">Escribeme</h2>
    <form class="formulario__conteiner-pricipal">
        <div class="formulario__input">
            <label class="formulario__label">Nombre</label>
            <input class="input" name="nombre" type="text" placeholder="Nombre y Apellido...">
        </div>
        <div class="formulario__input">
            <label class="formulario__label">Email</label>
            <input class="input" name="email" type="email" placeholder="@Email...">
        </div>
        <div class="formulario__input">
            <label class="formulario__label">Mensaje</label>
            <textarea class="input" name="textarea" id="" cols="30" rows="10" placeholder="Mensaje..."></textarea>
        </div>
        <div class="formulario__button">
            <button class="formulario__button-boton">Enviar</button>
        </div>
    </form>
</div>
      `;
  el.appendChild(formEl);

  const formSubmit = formEl.querySelector(".formulario__conteiner-pricipal");
  formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const objeto = Object.fromEntries(data.entries());
    sendForm(objeto);
    /* reset value */
    let inputs = document.querySelectorAll(".input");
    inputs.forEach((i) => {
      i.value = "";
    });
  });

  function sendForm(objeto) {
    const url = "https://apx-api.vercel.app/api/utils/dwf";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "marioachavez1@gmail.com",
        message: objeto["textarea"],
      }),
    })
      .then((res) => res.json())
      .then((response) => console.log("Success:", response));
  }
}
