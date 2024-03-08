let microfono;
let mostrarTexto = true;



function setup() {
  let canvas = createCanvas(400, 400, WEBGL);
  
  canvas.mousePressed(userStartAudio);
  userStartAudio();
  microfono = new p5.AudioIn();
  microfono.start();
}

function draw() {
  let gritoNivel = microfono.getLevel();
  // Ajusta la visibilidad de "Grita" en función del nivel de audio
  mostrarTexto = gritoNivel<=0.1
  text("activar",width / 2,20 );
 

  // Ajusta el tamaño de "Grita" en función del nivel de audio
  let tamanioTexto = map(gritoNivel, 0, 1, 1, 10); // Tamaño se ajusta de 1 a 0
  document.getElementById("grita").style.fontSize = tamanioTexto + "em";



  // Ajusta la visibilidad del texto "Grita"
  document.getElementById("frase").style.visibility = mostrarTexto 
    ? "hidden"
    : "visible";

  sleep(1000)
}
