// Obtener referencias a elementos del DOM

document.addEventListener('DOMContentLoaded', function () {
  const NombreIngresado = document.getElementById('NombreDelJugador');
  const piedraImg = document.getElementById('piedra');
  const papelImg = document.getElementById('papel');
  const tijeraImg = document.getElementById('tijera');
  const resultadosListados = document.getElementById('resultadosListados');
  const resultadoFinalDiv = document.getElementById('resultadoFinal');
  const BtnJugarDeNuevo = document.getElementById('BtnJugarDeNuevo');
  const resultadoJuego = document.getElementById('resultadoJuego');

  // Definir opciones y nombres de imágenes correspondientes
  const opciones = ['Piedra', 'Papel', 'Tijera'];
  const imagenes = ['piedra.png', 'papel.png', 'tijera.png'];

  // Variables para llevar el seguimiento de puntos y partida
  let puntosJugador = 0;
  let puntosPC = 0;
  let partida = 0;
  let gameEnded = false;
  let NombreDelJugador = '';
  

  // Función para generar una opción aleatoria para la PC
  function OpcionesAleatorias() {
    const randomIndex = Math.floor(Math.random() * opciones.length);
    return opciones[randomIndex];
  }

  // Función para determinar al ganador
  function determinaGanador(opcionJugador, opcionPC) {
    if (opcionJugador === opcionPC) {
      return 'Empate';
    } else if (
      (opcionJugador === 'Piedra' && opcionPC === 'Tijera') ||
      (opcionJugador === 'Papel' && opcionPC === 'Piedra') ||
      (opcionJugador === 'Tijera' && opcionPC === 'Papel')
    ) {
      puntosJugador++;
      return `¡Ganaste! (Puntaje: ${puntosJugador} - ${puntosPC})`;
    } else {
      puntosPC++;
      return `¡Perdiste! (Puntaje: ${puntosJugador} - ${puntosPC})`;
    }
  }

  // Función para actualizar los resultados en la lista
  function actualizarResultados(opcionJugador, opcionPC, result) {
    const li = document.createElement('li');
    li.textContent = `Partida ${partida}: ${opcionJugador} vs ${opcionPC} - ${result}`;
    resultadosListados.appendChild(li);
    if (puntosJugador >= 3 || puntosPC >= 3) {
      mostrarGanador();
    }

    if (partida === 1) {
      resultadoJuego.style.display = 'block';
    }
  }

 // Función para validar el nombre ingresado
  
function isValidName(name) {
  const nameRegex = /^[A-Za-z]+$/;
  if (nameRegex.test(name)) {
    NombreDelJugador = name;
    return true;
  } else {
    return false;
  }
}


// Función para jugar una partida
function playpartida(opcionJugador) {
  const NombreDelJugador = NombreIngresado.value.trim();

  
  // Verificación de condiciones antes de jugar
  if (NombreDelJugador === '') {
    alert('Ingresa tu nombre antes de jugar.');
    return;
  }

  if (!isValidName(NombreDelJugador)) {
    alert('Ingresa un nombre válido (solo letras).');
    return;
  }

  // Jugar la partida, determinar resultado y actualizar resultados
  const opcionPC = OpcionesAleatorias();
  const result = determinaGanador(opcionJugador, opcionPC);

  partida++;
  actualizarResultados(opcionJugador, opcionPC, result);
}

// Función para mostrar al ganador del juego
function mostrarGanador() {
  const Ganador = puntosJugador >= 3 ? NombreDelJugador : 'PC';
  const anuncioGanador = document.createElement('div');
  anuncioGanador.id = 'ResaltaGanador';
  anuncioGanador.textContent = `${Ganador} ganó el juego`;
  resultadoFinalDiv.appendChild(anuncioGanador);
  
  BtnJugarDeNuevo.style.display = 'block';
  gameEnded = true;
  piedraImg.style.display = 'none';
  papelImg.style.display = 'none';
  tijeraImg.style.display = 'none';
}




  piedraImg.addEventListener('click', function () {
    playpartida('Piedra');
  });

  papelImg.addEventListener('click', function () {
    playpartida('Papel');
  });

  tijeraImg.addEventListener('click', function () {
    playpartida('Tijera');
  });

  function playpartida(opcionJugador) {
    const NombreDelJugador = NombreIngresado.value.trim();

    if (gameEnded) {
      alert('El juego ha terminado. Presiona "Jugar de nuevo" para reiniciar.');
      return;
    }

    if (NombreDelJugador === '') {
      alert('Ingresa tu nombre antes de jugar.');
      return;
    }

    if (!isValidName(NombreDelJugador)) {
      alert('Ingresa un nombre válido (solo letras).');
      return;
    }

    const opcionPC = OpcionesAleatorias();
    const result = determinaGanador(opcionJugador, opcionPC);

    partida++;
    actualizarResultados(opcionJugador, opcionPC, result);
  }

  BtnJugarDeNuevo.addEventListener('click', function () {
    puntosJugador = 0;
    puntosPC = 0;
    partida = 0;
    resultadosListados.innerHTML = '';
    resultadoFinalDiv.textContent = '';
    BtnJugarDeNuevo.style.display = 'none';
    resultadoJuego.style.display = 'none';
    gameEnded = false;
    piedraImg.style.display = 'block';
    papelImg.style.display = 'block';
    tijeraImg.style.display = 'block';
  });
});



























