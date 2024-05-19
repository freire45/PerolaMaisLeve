var btnInicioAnimcao = document.querySelector(".botaoIniciarAbertura");
var painelJogoPrincipal = document.querySelector("#jogoPrincipal1");
var painelInsereBotao = document.querySelector(".alinhaBotao");

var adAnimacaoInicial = document.createElement("video");
var adSource = document.createElement("source");
var adCanvas = document.createElement("canvas");

var posicoes = [1, 1, 1, 1, 1, 1, 1, 1];

var valoraleatorio = Math.floor(Math.random(0, 8) * 10);
if (valoraleatorio > 7) valoraleatorio = 0;
posicoes[valoraleatorio] = 0.5;

adAnimacaoInicial.id = "adAnimacaoInicial";
adAnimacaoInicial.appendChild(adSource);
adSource.id = "adsource";
adSource.setAttribute("src", "midias/abertura.mp4");
adSource.setAttribute("type", "video/mp4");
adSource.setAttribute("autoplay", "true");

adCanvas.id = "adcanvas";
let ctx = adCanvas.getContext("2d");

let img1 = new Image();
img1.src = "img/perola.png";
img1.value = posicoes[0];
img1.setAttribute("draggable", "true");
img1.id = "imgem1";
img1.classList.add("classeImagensPerolas");

let posicaoImg1Horizontal = 15;
let posicaoImg2Vertical = 120;
let estaMovendo = false;

var posicaoX;
var posicaoY;

let img2 = new Image();
img2.src = "img/perola.png";
img2.value = posicoes[1];
img2.draggable = true;
img2.setAttribute("draggable", "true");
img2.classList.add("classeImagensPerolas");

let img3 = new Image();
img3.src = "img/perola.png";
img3.value = posicoes[2];
img3.draggable = true;
img3.setAttribute("draggable", "true");
img3.classList.add("classeImagensPerolas");

let img4 = new Image();
img4.src = "img/perola.png";
img4.value = posicoes[3];
img4.draggable = true;
img4.setAttribute("draggable", "true");
img4.classList.add("classeImagensPerolas");

let img5 = new Image();
img5.src = "img/perola.png";
img5.value = posicoes[4];
img5.draggable = true;
img5.setAttribute("draggable", "true");
img5.classList.add("classeImagensPerolas");

let img6 = new Image();
img6.src = "img/perola.png";
img6.value = posicoes[5];
img6.draggable = true;
img6.setAttribute("draggable", "true");
img6.classList.add("classeImagensPerolas");

let img7 = new Image();
img7.src = "img/perola.png";
img7.value = posicoes[6];
img7.draggable = true;
img7.setAttribute("draggable", "true");
img7.classList.add("classeImagensPerolas");

let img8 = new Image();
img8.src = "img/perola.png";
img8.value = posicoes[7];
img8.draggable = true;
img8.setAttribute("draggable", "true");
img8.classList.add("classeImagensPerolas");

var items = document.querySelectorAll(".classeImagensPerolas");

let imgSaco = new Image();
imgSaco.src = "img/saco.png";
imgSaco.id = "sacoDescarte";
imgSaco.classList.add("descSaco");

var dropZone = document.querySelector("#descSaco");

let imgCastical = new Image();
imgCastical.src = "img/castical.png";

let imgBalanca = new Image();
imgBalanca.src = "img/balanca.png";

var musica = document.createElement("audio");
musica.id = "musica";
musica.setAttribute("src", "midias/musica2.mp3");
musica.setAttribute("type", "music/mp3");
musica.setAttribute("autoplay", "true");
musica.setAttribute("loop", "true");

img1.addEventListener("dragstart", (e) => {
  e.dataTransfer.setDragImage(img1, 0, 0);
});

btnInicioAnimcao.addEventListener("click", function () {
  document.getElementById("btnIniciarAbertura").remove();

  painelJogoPrincipal.appendChild(adAnimacaoInicial);
  adAnimacaoInicial.play();

  deletaVideo();
});

setTimeout(function deletaVideo() {
  document.getElementById("adsource").remove();
  document.getElementById("adAnimacaoInicial").remove();

  painelJogoPrincipal.appendChild(adCanvas);
  adCanvas.appendChild(musica);
  musica.play();

  ctx.drawImage(img1, posicaoImg1Horizontal, posicaoImg2Vertical, 10, 10);
  ctx.drawImage(img2, 49, 120, 10, 10);
  ctx.drawImage(img3, 83, 120, 10, 10);
  ctx.drawImage(img4, 118, 120, 10, 10);
  ctx.drawImage(img5, 152, 120, 10, 10);
  ctx.drawImage(img6, 187, 120, 10, 10);
  ctx.drawImage(img7, 221, 120, 10, 10);
  ctx.drawImage(img8, 256, 120, 10, 10);
  ctx.drawImage(imgSaco, 20, 40, 50, 50);
  ctx.drawImage(imgCastical, 256, 40, 50, 50);
  ctx.drawImage(imgBalanca, 116, 50, 75, 75);
}, "41000");
