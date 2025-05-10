

const titulo = document.querySelector(".hero h1");
let textoIndex = 0;
let charIndex = 0;
let apagando = false;

function digitarTexto() {
  const textoAtual = textos[textoIndex];

  if (!apagando && charIndex <= textoAtual.length) {
    titulo.textContent = textoAtual.substring(0, charIndex++);
    setTimeout(digitarTexto, 100);
  } else if (apagando && charIndex >= 0) {
    titulo.textContent = textoAtual.substring(0, charIndex--);
    setTimeout(digitarTexto, 50);
  } else {
    apagando = !apagando;
    if (!apagando) textoIndex = (textoIndex + 1) % textos.length;
    setTimeout(digitarTexto, 800);
  }
}

setTimeout(digitarTexto, 500);

// Scroll suave para âncoras
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Botão "Voltar ao Topo"
const botaoTopo = document.createElement("button");
botaoTopo.innerHTML = "⬆️ Topo";
botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.padding = "10px 15px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "8px";
botaoTopo.style.background = "#333";
botaoTopo.style.color = "white";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";
botaoTopo.style.zIndex = "999";
document.body.appendChild(botaoTopo);

window.addEventListener("scroll", () => {
  botaoTopo.style.display = window.scrollY > 300 ? "block" : "none";
});

botaoTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
