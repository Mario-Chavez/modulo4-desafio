function createForm(el) {
  const formEl = document.createElement("div");
  formEl.innerHTML = `
    <div class="formulario">
    <h2 class="titulos formulario__titulo">Escribeme</h2>
    <form class="formulario__conteiner-pricipal">
        <div class="formulario__input">
            <label class="formulario__label">Nombre</label>
            <input name="buscar" type="text" placeholder="Nombre y Apellido...">
        </div>
        <div class="formulario__input">
            <label class="formulario__label">Email</label>
            <input name="email" type="email" placeholder="@Email...">
        </div>
        <div class="formulario__input">
            <label class="formulario__label">Mensaje</label>
            <textarea name="textarea" id="" cols="30" rows="10" placeholder="Mensaje..."></textarea>
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
    console.log(e.target.buscar.value);
    console.log(e.target.email.value);
    console.log(e.target.textarea.value);
    /* pude sacar el valor de cada input */
  });
}
