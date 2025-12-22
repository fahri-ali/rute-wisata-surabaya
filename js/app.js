const destinations = [
    {
        name: "Masjid Al-Akbar Surabaya",
        lat: -7.3285,
        lng: 112.7282,
        image: "assets/masjidAl-akbar.webp",
        gallery: [
            "assets/01/masjid1.jpg",
            "assets/01/masjid2.jpg",
            "assets/01/masjid3.jpg",
            "assets/01/masjid4.jpg"
        ],
        description: "Masjid terbesar di Jawa Timur dengan menara setinggi 99 meter",
        isStart: true,
        distance: "Start",
        time: "08:00"
    },
    {
        name: "Kebun Binatang Surabaya",
        lat: -7.2843,
        lng: 112.7351,
        image: "assets/kbs.webp",
        gallery: [
            "assets/02/kbs1.jpg",
            "assets/02/kbs2.jpg",
            "assets/02/kbs3.jpg",
            "assets/02/kbs4.jpg"
        ],
        description: "Kebun binatang tertua di Indonesia sejak 1916",
        distance: "6.5 km",
        time: "20 menit"
    },
    {
        name: "Museum HOS Tjokroaminoto",
        lat: -7.2397,
        lng: 112.7331,
        image: "assets/museumHosTjokroaminoto.jpg",
        gallery: [
            "assets/03/hos1.jpg",
            "assets/03/hos2.jpg",
            "assets/03/hos3.jpg",
            "assets/03/hos4.jpg"
        ],
        description: "Rumah kediaman tokoh pergerakan nasional Indonesia",
        distance: "5.8 km",
        time: "17 menit"
    },
    {
        name: "Monumen Tugu Pahlawan",
        lat: -7.2459,
        lng: 112.7378,
        image: "assets/monumenTuguPahlawan.jpg",
        gallery: [
            "assets/04/tugu1.jpg",
            "assets/04/tugu2.jpg",
            "assets/04/tugu3.jpg",
            "assets/04/tugu4.jpg"
        ],
        description: "Monumen ikonik setinggi 41,15 meter mengenang perjuangan arek-arek Suroboyo",
        distance: "1.2 km",
        time: "4 menit"
    },
    {
        name: "Surabaya North Quay",
        lat: -7.2089,
        lng: 112.7297,
        image: "assets/SNQ.jpg",
        gallery: [
            "assets/05/snq1.jpg",
            "assets/05/snq2.jpg",
            "assets/05/snq3.jpg",
            "assets/05/snq4.jpg"
        ],
        description: "Kawasan wisata kuliner dan rekreasi tepi laut dengan pemandangan pelabuhan",
        distance: "4.5 km",
        time: "14 menit"
    },
    {
        name: "Masjid Sunan Ampel",
        lat: -7.2295,
        lng: 112.7416,
        image: "assets/sunanAmpel.webp",
        gallery: [
            "assets/06/sa1.jpg",
            "assets/06/sa2.jpg",
            "assets/06/sa3.webp",
            "assets/06/sa4.jpg",
        ],
        description: "Masjid bersejarah peninggalan Wali Songo untuk ziarah dan wisata religi",
        distance: "2.4 km",
        time: "7 menit"
    },
    {
        name: "Masjid Cheng Hoo",
        lat: -7.2447,
        lng: 112.7389,
        image: "assets/chengHo.jpeg",
        gallery: [
            "assets/07/chengho1.jpg",
            "assets/07/chengho2.jpg",
            "assets/07/chengho3.jpg",
            "assets/07/chengho4.webp",
        ],
        description: "Masjid berarsitektur unik perpaduan budaya Tionghoa dan Islam",
        distance: "1.9 km",
        time: "6 menit"
    },
    {
        name: "Museum Pendidikan",
        lat: -7.2558,
        lng: 112.7401,
        image: "assets/musPendidikan.jpg",
        gallery: [
            "assets/08/museumPendidikan1.webp",
            "assets/08/museumPendidikan2.webp",
            "assets/08/museumPendidikan3.jpg",
            "assets/08/museumPendidikan4.webp",
        ],
        description: "Museum yang menampilkan sejarah dan perkembangan pendidikan Indonesia",
        distance: "1.4 km",
        time: "4 menit"
    },
    {
        name: "Monumen Kapal Selam",
        lat: -7.2655,
        lng: 112.7355,
        image: "assets/monKapalSelam.jpg",
        gallery: [
            "assets/09/kapalSelam1.jpg",
            "assets/09/kapalSelam2.png",
            "assets/09/kapalSelam3.jpg",
            "assets/09/kapalSelam4.jpg",
        ],
        description: "Kapal selam KRI Pasopati 410 yang dijadikan museum dan monumen",
        distance: "1.5 km",
        time: "5 menit"
    },
    {
        name: "Alun-Alun Surabaya",
        lat: -7.2459,
        lng: 112.7378,
        image: "assets/alunSby.webp",
        gallery: [
            "assets/10/alun1.jpeg",
            "assets/10/alun2.jpg",
            "assets/10/alun3.jpg",
            "assets/10/alun4.webp",
        ],
        description: "Pusat kota Surabaya dengan taman hijau dan air mancur menawan",
        distance: "2.5 km",
        time: "8 menit"
    },
    {
        name: "Kembali ke Masjid Al-Akbar",
        lat: -7.3285,
        lng: 112.7282,
        image: "assets/masjidAl-akbar.webp",
        gallery: [
            "assets/01/masjid1.jpg",
            "assets/01/masjid2.jpg",
            "assets/01/masjid3.jpg",
            "assets/01/masjid4.jpg",
        ],
        description: "Perjalanan selesai - kembali ke titik awal keberangkatan",
        distance: "10.5 km",
        time: "32 menit",
        isEnd: true
    }
];

let map;
let markers = [];
let polyline;

function initMap() {
    map = L.map('map').setView([-7.2575, 112.7521], 12);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    renderDestinations();
    drawRoute();
}

function renderDestinations() {
    const container = document.getElementById('destinations-container');
    
    destinations.forEach((dest, idx) => {
        if (idx === destinations.length - 1) {
            const returnDiv = document.createElement('div');
            returnDiv.className = 'arrow-section';
            returnDiv.innerHTML = `
                <span class="arrow-icon">⬇️</span>
                <span class="distance-time">
                    ${dest.distance} • ${dest.time}
                </span>
            `;
            container.appendChild(returnDiv);

            const returnCard = document.createElement('div');
            returnCard.className = 'destination-card';
            returnCard.style.borderLeft = '5px solid #28a745';
            returnCard.innerHTML = `
                <div class="destination-header" style="background: #28a74510;">
                    <div class="destination-number" style="background: #28a745;">✓</div>
                    <div class="destination-info">
                        <div class="destination-name">${dest.name}</div>
                        <span class="return-badge">🔄 Rute Selesai</span>
                    </div>
                </div>
                <img src="${dest.image}" alt="${dest.name}" class="destination-image clickable" onclick='openGallery(${JSON.stringify(dest.gallery)}, "${dest.name}")'">
                <div class="destination-details">
                    <div class="detail-row">
                        <span class="detail-icon">📍</span>
                        <span>${dest.description}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-icon">🚌</span>
                        <span><strong>Jarak:</strong> ${dest.distance}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-icon">⏱️</span>
                        <span><strong>Waktu:</strong> ${dest.time}</span>
                    </div>
                </div>
            `;
            container.appendChild(returnCard);
            return;
        }

        const card = document.createElement('div');
        card.className = 'destination-card';
        
        card.innerHTML = `
            <div class="destination-header">
                <div class="destination-number">${idx + 1}</div>
                <div class="destination-info">
                    <div class="destination-name">${dest.name}</div>
                    ${dest.isStart ? '<span style="color: #28a745; font-size: 0.85em; font-weight: bold;">🚩 Titik Awal</span>' : ''}
                </div>
            </div>
            <img src="${dest.image}" alt="${dest.name}" class="destination-image clickable" onclick='openGallery(${JSON.stringify(dest.gallery)}, "${dest.name}")'">
            <div class="destination-details">
                <div class="detail-row">
                    <span class="detail-icon">📍</span>
                    <span>${dest.description}</span>
                </div>
                ${!dest.isStart ? `
                <div class="detail-row">
                    <span class="detail-icon">🚌</span>
                    <span><strong>Jarak:</strong> ${dest.distance}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-icon">⏱️</span>
                    <span><strong>Waktu:</strong> ${dest.time}</span>
                </div>
                ` : `
                <div class="detail-row">
                    <span class="detail-icon">🕐</span>
                    <span><strong>Waktu Mulai:</strong> ${dest.time}</span>
                </div>
                `}
            </div>
        `;
        container.appendChild(card);

        if (idx < destinations.length - 1) {
            const arrow = document.createElement('div');
            arrow.className = 'arrow-section';
            arrow.innerHTML = `
                <span class="arrow-icon">⬇️</span>
                <span class="distance-time">
                    ${destinations[idx + 1].distance} • ${destinations[idx + 1].time}
                </span>
            `;
            container.appendChild(arrow);
        }

        const markerColor = dest.isStart ? '#28a745' : '#667eea';
        const marker = L.marker([dest.lat, dest.lng], {
            icon: L.divIcon({
                className: 'custom-marker',
                html: `<div style="background: ${markerColor}; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; border: 3px solid white; box-shadow: 0 3px 10px rgba(0,0,0,0.3); font-size: 1.1em;">${dest.isStart ? '🚩' : idx + 1}</div>`,
                iconSize: [40, 40]
            })
        }).addTo(map);
        
        marker.bindPopup(`
            <div style="text-align: center;">
                <strong style="font-size: 1.1em;">${dest.name}</strong><br>
                <span style="color: #6c757d; font-size: 0.9em;">${dest.description}</span>
                ${!dest.isStart ? `<br><span style="color: #667eea; font-weight: bold;">${dest.distance} • ${dest.time}</span>` : ''}
            </div>
        `);
        markers.push(marker);
    });
}

function drawRoute() {
    const latlngs = destinations.map(d => [d.lat, d.lng]);
    polyline = L.polyline(latlngs, {
        color: '#667eea',
        weight: 4,
        opacity: 0.8
    }).addTo(map);

    map.fitBounds(polyline.getBounds(), { padding: [50, 50] });
}

/* =====================
   DARK MODE
===================== */
const toggleBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    toggleBtn.textContent = savedTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
}

toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    toggleBtn.textContent = newTheme === 'dark'
        ? '☀️ Light Mode'
        : '🌙 Dark Mode';
});

/* =====================
   GALLERY LOGIC
===================== */
let galleryImages = [];
let currentImageIndex = 0;

function openGallery(images, title) {
    galleryImages = images;
    currentImageIndex = 0;

    document.getElementById('gallery-modal').style.display = 'flex';
    document.getElementById('gallery-caption').textContent = title;

    updateGalleryImage();
}

function closeGallery() {
    document.getElementById('gallery-modal').style.display = 'none';
}

function updateGalleryImage() {
    document.getElementById('gallery-image').src = galleryImages[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateGalleryImage();
}

function prevImage() {
    currentImageIndex =
        (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGalleryImage();
}

/* CLOSE ON CLICK OUTSIDE */
document.getElementById('gallery-modal').addEventListener('click', e => {
    if (e.target.id === 'gallery-modal') closeGallery();
});

initMap();