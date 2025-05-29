const APP = {
  ver: "1.0.0",
  user: { id: 0 },
  cfg: {
    auto: false,
    questionSpoof: false
  }
};

// Cargar Toastify
async function loadScript(url) {
  const response = await fetch(url);
  const script = await response.text();
  eval(script);
}

async function loadCss(url) {
  return new Promise(resolve => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    link.onload = resolve;
    document.head.appendChild(link);
  });
}

function sendToast(msg, dur = 3000) {
  if (typeof Toastify !== "undefined") {
    Toastify({
      text: msg,
      duration: dur,
      gravity: "bottom",
      position: "center",
      style: { background: "#333" }
    }).showToast();
  } else {
    console.log("Toast:", msg);
  }
}

async function initBeereadersDestroyer() {
  await loadCss("https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css");
  await loadScript("https://cdn.jsdelivr.net/npm/toastify-js");

  const panel = document.createElement("div");
  panel.style = `
    position: fixed;
    top: 10px;
    right: 10px;
    background: #1e1e1e;
    color: white;
    padding: 12px;
    border-radius: 8px;
    box-shadow: 0 0 10px #000;
    z-index: 99999;
    font-family: sans-serif;
    width: 200px;
  `;

  panel.innerHTML = `
    <div style="font-weight: bold; font-size: 16px; margin-bottom: 8px;">
      📚 Beereaders Destroyer <small style="color:#888;">v${APP.ver}</small>
    </div>
    <div style="margin: 8px 0;">
      <label>Auto Completar</label>
      <input type="checkbox" id="autoCheck" />
    </div>
    <div style="margin: 8px 0;">
      <label>Question Spoof</label>
      <input type="checkbox" id="spoofCheck" />
    </div>
    <div style="font-size: 10px; color: #aaa; margin-top: 10px;">by Carlos Destroyer 😎</div>
  `;
  document.body.appendChild(panel);

  document.getElementById("autoCheck").onchange = (e) => {
    APP.cfg.auto = e.target.checked;
    sendToast(APP.cfg.auto ? "✅ Auto activado" : "❌ Auto desactivado");
  };

  document.getElementById("spoofCheck").onchange = (e) => {
    APP.cfg.questionSpoof = e.target.checked;
    sendToast(APP.cfg.questionSpoof ? "✅ Spoof activado" : "❌ Spoof desactivado");
  };
}

initBeereadersDestroyer();
