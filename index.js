let microfono;
let mostrarTexto = true;
let tamanioTexto = 0
const tamaniomaximo = 72

function setup() {
  let canvas = createCanvas(400, 400, WEBGL);

  canvas.mousePressed(userStartAudio);
  userStartAudio();
  microfono = new p5.AudioIn();
  microfono.start();
  frameRate (60)
}

function draw() {
  let gritoNivel = microfono.getLevel();
  // Ajusta la visibilidad de "Grita" en función del nivel de audio
  mostrarTexto = gritoNivel <= 0.1
  text("activar", width / 2, 20);

  if (tamanioTexto < tamaniomaximo & mostrarTexto) {
    // Ajusta el tamaño de "Grita" en función del nivel de audio
    tamanioTexto = map(gritoNivel, 0, 1, 1, tamaniomaximo); // Tamaño se ajusta de 1 a 0
    document.getElementById("grita").style.fontSize = tamanioTexto + "em";



    // Ajusta la visibilidad del texto "Grita"
    document.getElementById("frase").style.visibility = mostrarTexto
      ? "hidden"
      : "visible";

  }
  else {
    tamanioTexto = tamanioTexto - 1
    document.getElementById("grita").style.fontSize = tamanioTexto + "em";

  }



}
