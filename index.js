let mic;
let showText = true;

function setup() {
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(userStartAudio);
  userStartAudio()
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);
  fill(255);

  if (showText) {
    text("Grita", width / 2, 20);
  }

  micLevel = mic.getLevel();
  let y = height - micLevel * height;
  ellipse(width / 2, y, 10, 10);

  // Ajusta la visibilidad de "Grita" en función del nivel de audio
  if (micLevel > 0.1) {
    showText = false;
  } else {
    showText = true;
  }

  // Ajusta el tamaño de "Grita" en función del nivel de audio
  let newSize = map(micLevel, 0, 1, 1, 0); // Tamaño se ajusta de 1 a 0
  document.getElementById("grita").style.fontSize = newSize + "em";

  // Ajusta la visibilidad del texto "Grita"
  document.getElementById("grita").style.visibility = showText
    ? "visible"
    : "hidden";
}
