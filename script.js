(function () {
  const id = "beereaders-dark-style";
  if (document.getElementById(id)) {
    alert("Modo oscuro ya está activo");
    return;
  }

  const style = document.createElement("style");
  style.id = id;
  style.innerHTML = `
    * {
      background-color: #000 !important;
      color: #fff !important;
      border-color: #444 !important;
    }
    a, h1, h2, h3, h4, h5, h6, p, span, div {
      color: #fff !important;
    }
    img, video {
      filter: brightness(0.8) contrast(1.2);
    }
    ::selection {
      background: #444;
    }
  `;
  document.head.appendChild(style);
  alert("🌙 Beereaders Destroyer: Modo Oscuro activado");
})();
