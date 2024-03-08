const tamanioMaximo = 4;
let microfono;
let mostrarTexto = true;
let tamanioGrita = tamanioMaximo;
let tamanioFrase = 0;

function setup() {
  let canvas = createCanvas(400, 400, WEBGL);

  canvas.mousePressed(userStartAudio);
  userStartAudio();
  microfono = new p5.AudioIn();
  microfono.start();
  frameRate(60);
}

function draw() {
  let gritoNivel = microfono.getLevel();
  // Ajusta la visibilidad de "Grita" en función del nivel de audio
  mostrarTexto = gritoNivel > 0.1;
  text("activar", width / 2, 20);

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
}
