let microfono;
let mostrarTexto = true;

function setup() {
  let canvas = createCanvas(200, 200);
  canvas.mousePressed(userStartAudio);
  microfono = new p5.AudioIn();
  microfono.start();
}

function draw() {
  let gritoNivel = microfono.getLevel();
  // Ajusta la visibilidad de "Grita" en función del nivel de audio
  mostrarTexto = gritoNivel<=0.01
 

  // Ajusta el tamaño de "Grita" en función del nivel de audio
  let tamanioTexto = map(gritoNivel, 0, 1, 1, 0); // Tamaño se ajusta de 1 a 0
  document.getElementById("grita").style.fontSize = tamanioTexto + "em";

  // Ajusta la visibilidad del texto "Grita"
  document.getElementById("grita").style.visibility = mostrarTexto
    ? "visible"
    : "hidden";
}
