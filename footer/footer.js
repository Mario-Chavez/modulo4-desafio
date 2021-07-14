function createFooter(el) {
  const footerEl = document.createElement("div");
  footerEl.innerHTML = `
    <div class="footer">
        <div class="footer__img">
            <img class="header__logo" src="./img/logo_m4-2.png" alt="">
        </div>
        <div class="footer__redes">
            <div class="footer__facebook">
                <i class="icono fab fa-facebook" ></i><a href="https://m.facebook.com/mario.chavez.3152130" class="footer__a">facebook</a>
            </div>
            <div class="footer__instagram">
                <i class="icono fab fa-instagram-square"></i><a href="https://www.instagram.com/mariochavez87/?hl=es-la" class="footer__a">Instagram</a>
            </div>
            <div class="footer__github">
                <i class="icono fab fa-github"></i><a href="https://github.com/Mario-Chavez" class="footer__a">Github</a>
            </div>
        </div>        
    </div>
    `;
  el.appendChild(footerEl);
}
