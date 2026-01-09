const photoBoard = document.getElementById('photoBoard');

// Array di foto locali
const photos = [
    {
        "id": 1,
        "title": "Skate Park",
        "date": "01-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/1.png"
    },
    {
        "id": 2,
        "title": "Passeggiata",
        "date": "16-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/2.png"
    },
    {
        "id": 3,
        "title": "Alpi",
        "date": "01-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/3.png"
    },
    {
        "id": 4,
        "title": "Sagra",
        "date": "21-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/4.png"
    },
    {
        "id": 5,
        "title": "Watergun",
        "date": "23-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/5.png"
    },
    {
        "id": 6,
        "title": "Riviera",
        "date": "30-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/6.png"
    }
];

// Genera dinamicamente le foto
photos.forEach(photo => {
    const photoDiv = document.createElement('div');
    photoDiv.className = 'photo';
    
    photoDiv.innerHTML = `
        <img src="${photo.url}" alt="${photo.title}">
        <img src="img/pin.svg" alt="Puntina" class="pin">
        <p>${photo.title}</p>
        <p class="date">${photo.date}</p>
    `;
    
    photoBoard.appendChild(photoDiv);
});

// Gestione dell'overlay
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');
const overlayImage = document.getElementById('overlayImage');

// Apri overlay al click su una foto
document.addEventListener('click', (e) => {
    if (e.target.closest('.photo') && e.target.tagName === 'IMG' && !e.target.classList.contains('pin')) {
        const photoElement = e.target.closest('.photo');
        const imgSrc = photoElement.querySelector('img:not(.pin)').src;
        overlayImage.src = imgSrc;
        overlay.classList.add('active');
    }
});

// Chiudi overlay
closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
});

// Chiudi overlay al click fuori dall'immagine
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('active');
    }
});
