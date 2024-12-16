document.addEventListener('DOMContentLoaded', function () {
    const ranking = document.getElementById('ranking');
    const shuffleButton = document.getElementById('shuffleButton');
    const captureButton = document.getElementById('captureButton');

    let canciones = [
        { title: "Tiburones en el Bosque", artist: "Cuarteto de Nos", img: "images/cancion1.jpg" },
        { title: "Torero", artist: "Chayanne", img: "images/cancion2.jpg" },
        { title: "Yellow", artist: "Coldplay", img: "images/cancion3.jpg" },
        { title: "Loco", artist: "Beéle", img: "images/cancion4.jpg" },
        { title: "Boom Clap", artist: "Charlie xcx", img: "images/cancion5.jpg" }
    ];

    let previousRanking = [...canciones]; // Guarda la posición anterior

    // Función para mostrar el ranking
    function mostrarRanking() {
        ranking.innerHTML = '';
        canciones.forEach((cancion, index) => {
            const item = document.createElement('div');
            item.classList.add('song-item');

            // Imagen y contenedor centrado
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('artist-item');

            const img = document.createElement('img');
            img.src = cancion.img;
            img.alt = `Imagen de ${cancion.title}`;
            img.classList.add('artist-image');
            imgContainer.appendChild(img);

            // Flecha debajo de la imagen
            const prevIndex = previousRanking.findIndex(c => c.title === cancion.title);
            const arrow = document.createElement('div');
            arrow.classList.add('arrow');
            if (prevIndex > index) {
                arrow.textContent = '⬆'; // Subió
                arrow.style.color = 'green';
            } else if (prevIndex < index) {
                arrow.textContent = '⬇'; // Bajó
                arrow.style.color = 'red';
            } else {
                arrow.textContent = '-'; // Sin cambio
                arrow.style.color = 'gray';
            }
            imgContainer.appendChild(arrow);

            item.appendChild(imgContainer);

            // Información de la canción
            const info = document.createElement('div');
            info.classList.add('song-info');
            info.innerHTML = `
                <div class="song-title">${cancion.title}</div>
                <div class="song-artist">${cancion.artist}</div>
            `;
            item.appendChild(info);

            ranking.appendChild(item);
        });
    }

    // Función para mezclar
    function mezclarRanking() {
        previousRanking = [...canciones]; // Guarda el ranking anterior
        canciones.sort(() => Math.random() - 0.5); // Mezcla aleatoriamente
        mostrarRanking();
    }

    // Evento para mezclar el ranking
    shuffleButton.addEventListener('click', mezclarRanking);
});
