// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "My love", time: 19.5 },
  { text: "will you", time: 21 },
  { text: "Take my hand", time: 24.7 },
  { text: "with virtue", time: 27 },
  { text: "For time", time: 30 },
  { text: "has proved", time: 33 },
  { text: "That I", time: 36 },
  { text: "do love you", time: 38 },
  { text: "Will we", time: 41 },
  { text: "ever find", time: 43 },
  { text: "A way to", time: 46 },
  { text: "make our time", time: 49 },
  { text: "last forever?", time: 51.5 },
  { text: "Because I", time: 53 },
  { text: "begin to miss you", time: 56 },
  { text: "One kiss", time: 84.5 },
  { text: "from you", time: 87 },
  { text: "And your touch", time: 90 },
  { text: "will change", time: 92.5 },
  { text: "My life", time: 94 },
  { text: "and my blue", time: 98 },
  { text: "As long as you stay", time: 100 },
  { text: "Will we", time: 106 },
  { text: "ever find", time: 108 },
  { text: "A way to", time: 111 },
  { text: "make our time", time: 114 },
  { text: "last forever?", time: 117 },
  { text: "Because I", time: 119 },
  { text: "begin to miss you", time: 121 },
  { text: "Will we", time: 128 },
  { text: "ever find", time: 130 },
  { text: "A way to", time: 133 },
  { text: "make our time", time: 136 },
  { text: "last forever?", time: 138 },
  { text: "Because I", time: 139.5 },
  { text: "begin to miss you", time: 143 },
  { text: "Will we", time: 150 },
  { text: "ever find", time: 152 },
  { text: "A way to", time: 154 },
  { text: "make our time", time: 157 },
  { text: "last forever?", time: 160 },
  { text: "Because I", time: 162 },
  { text: "begin to miss you", time: 165 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);