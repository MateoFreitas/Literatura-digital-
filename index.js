const tamanioMaximo = 4;
let microfono;
let mostrarTexto = true;
let tamanioGrita = tamanioMaximo;
let tamanioFrase = 0;
const frases = [
"grita hasta que los jubilados no tengan hambre", 
"grita hasta que todos puedan comer",  
"grita hasta que dejen de avanzar sobre la educacion publica", 
"grita hasta que respeten tus derechos"]

const esperando = 0
const gritando = 1 
const silencio = 2
let estado = esperando 
let fraseActual = frases[Math.floor(Math.random() * frases.length)];

function setup() {
  let canvas = createCanvas(400, 400, WEBGL);

  canvas.mousePressed(userStartAudio);
  userStartAudio();
  microfono = new p5.AudioIn();
  microfono.start();
  frameRate(60);
  document.getElementById("frase").innerText = fraseAleatoria;
  
}

function draw() {
  let gritoNivel = microfono.getLevel();
  // Ajusta la visibilidad de "Grita" en función del nivel de audio
  mostrarTexto = gritoNivel > 0.1;
  text("activar", width / 2, 20);

  if (estado === esperando) {
    fraseActual = frases[Math.floor(Math.random() * frases.length)];
  } 
  if (estado===silencio) {
    fraseActual = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById("frase").innerText = frases;
}
  }
  if (estado === gritando){
    document.getElementById("frase").innerText = frases;

  }

  if ((tamanioFrase < tamanioMaximo) & mostrarTexto) {
    // Ajusta el tamaño de "Grita" en función del nivel de audio
    tamanioGrita = map(gritoNivel, 0, 1, tamanioMaximo, 0); // Tamaño se ajusta de 1 a 0
    document.getElementById("grita").style.fontSize = tamanioGrita + "em";

    // Ajusta la visibilidad del texto "Grita"
    tamanioFrase = map(gritoNivel, 0, 1, 0, tamanioMaximo); // Tamaño se ajusta de 1 a 0
    document.getElementById("frase").style.fontSize = tamanioFrase + "em";
  } else {
    tamanioFrase = tamanioFrase < 0 ? 0 : tamanioFrase - 1;
    document.getElementById("frase").style.fontSize = tamanioFrase + "em";

    tamanioGrita =
      tamanioGrita > tamanioMaximo ? tamanioMaximo : tamanioGrita + 1;
    document.getElementById("grita").style.fontSize = tamanioGrita + "em";
  }

