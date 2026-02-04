const btnNo = document.getElementById('btn-no');
const btnSi = document.getElementById('btn-si');
const personaje = document.getElementById('mi-personaje');
const msjPregunta = document.getElementById('msj-pregunta');
const celebracion = document.getElementById('celebracion');

const mensajesChantaje = [
    "¿Segura? 🥺",
    "Piénsalo bien...",
    "¿Ni por un chocolate? 🍫",
    "Me vas a hacer llorar... 😢",
    "¡Por favooor! 🙏",
    "Mira mi carita...",
    "No me hagas esto... 💔",
    "¡Di que sí! 🌹"
];

let indexMensaje = 0;

// --- Lógica del Botón NO ---
btnNo.addEventListener('click', () => {
    // Cambia a la imagen triste
    personaje.src = 'assets/moy_triste.png';
    
    // Cambia el mensaje con una animación sutil
    msjPregunta.style.transform = "scale(0.9)";
    setTimeout(() => {
        msjPregunta.innerText = mensajesChantaje[indexMensaje];
        msjPregunta.style.transform = "scale(1)";
        indexMensaje = (indexMensaje + 1) % mensajesChantaje.length;
    }, 100);

    // Hace el botón SÍ más grande y el NO más pequeño
    const currentSizeSi = parseFloat(window.getComputedStyle(btnSi).fontSize);
    const currentPaddingSi = parseFloat(window.getComputedStyle(btnSi).paddingTop);
    
    btnSi.style.fontSize = (currentSizeSi * 1.1) + 'px';
    btnSi.style.padding = (currentPaddingSi * 1.1) + 'px ' + (currentPaddingSi * 1.5) + 'px';
    
    const currentSizeNo = parseFloat(window.getComputedStyle(btnNo).fontSize);
    btnNo.style.fontSize = Math.max(currentSizeNo * 0.9, 10) + 'px';
});

// --- Lógica del Botón SÍ ---
btnSi.addEventListener('click', () => {
    // Muestra la pantalla final
    celebracion.style.display = 'flex';
    
    // Lanza confeti de corazones
    lanzarConfeti();
});

// --- Generador de Estrellas del Fondo ---
const estrellasCapa = document.getElementById('estrellas-capa');
if (estrellasCapa) {
    for (let i = 0; i < 90; i++) {
        const star = document.createElement('div');
        star.className = 'estrella';
        const size = Math.random() * 2.5 + 'px';
        star.style.width = size;
        star.style.height = size;
        // Distribución más natural
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 65 + '%';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        star.style.animationDelay = Math.random() * 2 + 's';
        estrellasCapa.appendChild(star);
    }
}

// --- Generador de Corazones Flotantes (Fondo) ---
setInterval(() => {
    crearCorazon(false);
}, 800);

function crearCorazon(esConfeti) {
    const heart = document.createElement('div');
    heart.className = 'corazon';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    
    if (esConfeti) {
        heart.style.top = Math.random() * 50 + '%';
        heart.style.animationDuration = (Math.random() * 2 + 1) + 's';
        heart.style.fontSize = (Math.random() * 30 + 15) + 'px';
        heart.style.zIndex = 110; // Por encima de la pantalla final
    } else {
        heart.style.bottom = '-20px';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    }
    
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}

// --- Función de Confeti Final ---
function lanzarConfeti() {
    for(let i = 0; i < 50; i++) {
        setTimeout(() => crearCorazon(true), i * 50);
    }
}