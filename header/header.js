function createHeader(el) {
  const headerEl = document.createElement("div");
  headerEl.innerHTML = `
    <header class="header">
                <img class="header__logo" src="./img/logo_m4-2.png" alt="">
                <button class="header__button">
                    <img class="header__img" src="./img/burger.png" alt="">
                </button>
                    
                    <div class="header__ventana"> 
                        <div class="header__ventana-button">
                            <button class="header__button-close">
                                <img class="header__img" src="../img/Vector (2).png" alt="">
                            </button>                            
                        </div>                       
                        <div class="header__menu">
                            <a class="header__menu-a" href="../index.html"><i class="fas fa-step-backward"></i> </a>
                            <a class="header__menu-a" href="../portfolio/portfolio.html"><i class="fas fa-briefcase"></i> Portfolio</a>
                            <a class="header__menu-a" href="../servicios/servicios.html"><i class="fas fa-concierge-bell"></i> Servicios</a>
                            <a class="header__menu-a" href="../contacto-page/contacto.html"><i class="far fa-address-book"></i> Contactos</a>                    
                        </div>
                    </div>
        </header>
    `;
  const abreVentana = headerEl.querySelector(".header__button");
  const cerrarVentana = headerEl.querySelector(".header__button-close");
  const ventanaEl = headerEl.querySelector(".header__ventana");

  abreVentana.addEventListener("click", function () {
    ventanaEl.style.display = "initial";
  });
  cerrarVentana.addEventListener("click", function () {
    ventanaEl.style.display = "";
  });

  el.appendChild(headerEl);
}
