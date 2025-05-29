(function () {
  const id = "beereaders-dark-style";
  if (document.getElementById(id)) {
    alert("Modo oscuro ya está activo");
    return;
  }

  const style = document.createElement("style");
  style.id = id;
  style.innerHTML = `
    body, .main-container, .container, .content, [class*="content"] {
      background-color: #121212 !important;
      color: #e0e0e0 !important;
    }

    h1, h2, h3, h4, h5, h6, p, span, div, li, label {
      color: #e0e0e0 !im
