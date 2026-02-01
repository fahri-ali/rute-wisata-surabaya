const destinations = [
    {
        name: "Masjid Al-Akbar Surabaya",
        lat: -7.336389933676913, 
        lng: 112.71510756654132,
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
        lat: -7.296132040927938,
        lng: 112.73667675304925,
        image: "assets/kbs.webp",
        gallery: [
            "assets/02/kbs1.jpg",
            "assets/02/kbs2.jpg",
            "assets/02/kbs3.jpg",
            "assets/02/kbs4.jpg"
        ],
        description: "Kebun binatang tertua di Indonesia sejak 1916",
        distance: "7.2 km",
        time: "22 menit"
    },
    {
        name: "Museum HOS Tjokroaminoto",
        lat: -7.25250059275408,
        lng: 112.73777109537656,
        image: "assets/museumHosTjokroaminoto.jpg",
        gallery: [
            "assets/03/hos1.jpg",
            "assets/03/hos2.jpg",
            "assets/03/hos3.jpg",
            "assets/03/hos4.jpg"
        ],
        description: "Rumah kediaman tokoh pergerakan nasional Indonesia",
        distance: "6.1 km",
        time: "18 menit"
    },
    {
        name: "Monumen Tugu Pahlawan",
        lat: -7.245565635924011,
        lng: 112.73785196654045,
        image: "assets/monumenTuguPahlawan.jpg",
        gallery: [
            "assets/04/tugu1.jpg",
            "assets/04/tugu2.jpg",
            "assets/04/tugu3.jpg",
            "assets/04/tugu4.jpg"
        ],
        description: "Monumen ikonik setinggi 41,15 meter mengenang perjuangan arek-arek Suroboyo",
        distance: "1.4 km",
        time: "4 menit"
    },
    {
        name: "Surabaya North Quay",
        lat: -7.197108230112165,
        lng: 112.73228287334331,
        image: "assets/SNQ.jpg",
        gallery: [
            "assets/05/snq1.jpg",
            "assets/05/snq2.jpg",
            "assets/05/snq3.jpg",
            "assets/05/snq4.jpg"
        ],
        description: "Kawasan wisata kuliner dan rekreasi tepi laut dengan pemandangan pelabuhan",
        distance: "4.8 km",
        time: "14 menit"
    },
    {
        name: "Masjid Sunan Ampel",
        lat: -7.230292718684413,
        lng: 112.7429058953764,
        image: "assets/sunanAmpel.webp",
        gallery: [
            "assets/06/sa1.jpg",
            "assets/06/sa2.jpg",
            "assets/06/sa3.webp",
            "assets/06/sa4.jpg",
        ],
        description: "Masjid bersejarah peninggalan Wali Songo untuk ziarah dan wisata religi",
        distance: "2.6 km",
        time: "8 menit"
    },
    {
        name: "Masjid Cheng Hoo",
        lat: -7.252024506734186,
        lng: 112.74690895304879,
        image: "assets/chengHo.jpeg",
        gallery: [
            "assets/07/chengho1.jpg",
            "assets/07/chengho2.jpg",
            "assets/07/chengho3.jpg",
            "assets/07/chengho4.webp",
        ],
        description: "Masjid berarsitektur unik perpaduan budaya Tionghoa dan Islam",
        distance: "2.1 km",
        time: "6 menit"
    },
    {
        name: "Museum Pendidikan",
        lat: -7.256218835661826,
        lng: 112.74293730886828,
        image: "assets/musPendidikan.jpg",
        gallery: [
            "assets/08/museumPendidikan1.webp",
            "assets/08/museumPendidikan2.webp",
            "assets/08/museumPendidikan3.jpg",
            "assets/08/museumPendidikan4.webp",
        ],
        description: "Museum yang menampilkan sejarah dan perkembangan pendidikan Indonesia",
        distance: "1.6 km",
        time: "5 menit"
    },
    {
        name: "Monumen Kapal Selam",
        lat: -7.2656122781196935,
        lng: 112.75031646654075,
        image: "assets/monKapalSelam.jpg",
        gallery: [
            "assets/09/kapalSelam1.jpg",
            "assets/09/kapalSelam2.png",
            "assets/09/kapalSelam3.jpg",
            "assets/09/kapalSelam4.jpg",
        ],
        description: "Kapal selam KRI Pasopati 410 yang dijadikan museum dan monumen",
        distance: "1.7 km",
        time: "5 menit"
    },
    {
        name: "Alun-Alun Surabaya",
        lat: -7.263621820952547,
        lng: 112.74531729537665,
        image: "assets/alunSby.webp",
        gallery: [
            "assets/10/alun1.jpeg",
            "assets/10/alun2.jpg",
            "assets/10/alun3.jpg",
            "assets/10/alun4.webp",
        ],
        description: "Pusat kota Surabaya dengan taman hijau dan air mancur menawan",
        distance: "2.8 km",
        time: "8 menit"
    },
    {
        name: "Kembali ke Masjid Al-Akbar",
        lat: -7.336389933676913, 
        lng: 112.71510756654132,
        image: "assets/masjidAl-akbar.webp",
        gallery: [
            "assets/01/masjid1.jpg",
            "assets/01/masjid2.jpg",
            "assets/01/masjid3.jpg",
            "assets/01/masjid4.jpg",
        ],
        description: "Perjalanan selesai - kembali ke titik awal keberangkatan",
        distance: "11.2 km",
        time: "34 menit",
        isEnd: true
    }
];

const segmentEstimates = [
    {
        main: "Estimasi Wisata Dari Masjid Al-Akbar Surabaya ke Kebun Binatang Surabaya berjarak 7.2 km / 22 menit",
        note: "(Dalam Rancangan penelitian ini Pemandu lapangan navigator pengemudi bus wisata Surabaya yang bersifat insidentil berposisi di tiap titik wisata yang cukup jauh ikut menghitung dan memantau jalannya perjalanan)"
    },
    {
        main: "Estimasi Wisata Dari Kebun Binatang Surabaya ke Museum HOS Tjokroaminoto berjarak 6.1 km / 18 menit",
        note: "(Dalam Rancangan penelitian ini Pemandu lapangan navigator pengemudi bus wisata Surabaya yang bersifat insidentil berposisi di tiap titik wisata yang cukup jauh ikut menghitung dan memantau jalannya perjalanan)"
    },
    {
        main: "Estimasi Wisata Dari Museum HOS Tjokroaminoto ke Monumen Tugu Pahlawan berjarak 1.4 km / 4 menit",
        note: "(Dalam Rancangan penelitian ini Pemandu lapangan navigator pengemudi bus wisata Surabaya yang bersifat insidentil berposisi di tiap titik wisata yang cukup jauh ikut menghitung dan memantau jalannya perjalanan)"
    },
    {
        main: "Estimasi Wisata Dari Monumen Tugu Pahlawan ke Surabaya North Quay berjarak 4.8 km / 14 menit",
        note: "(Dalam Rancangan penelitian ini Pemandu lapangan navigator pengemudi bus wisata Surabaya yang bersifat insidentil berposisi di tiap titik wisata yang cukup jauh ikut menghitung dan memantau jalannya perjalanan)"
    },
    {
        main: "Estimasi Wisata Dari Surabaya North Quay ke Masjid Sunan Ampel berjarak 2.6 km / 8 menit",
        note: "(Dalam Rancangan penelitian ini Pemandu lapangan navigator pengemudi bus wisata Surabaya yang bersifat insidentil berposisi di tiap titik wisata yang cukup jauh ikut menghitung dan memantau jalannya perjalanan)"
    },
    {
        main: "Estimasi Wisata Dari Masjid Sunan Ampel ke Masjid Cheng Hoo berjarak 2.1 km / 6 menit",
        note: "(Dalam Rancangan penelitian ini Pemandu lapangan navigator pengemudi bus wisata Surabaya yang bersifat insidentil berposisi di tiap titik wisata yang cukup jauh ikut menghitung dan memantau jalannya perjalanan)"
    },
    {
        main: "Estimasi Wisata Dari Masjid Cheng Hoo ke Museum Pendidikan berjarak 1.6 km / 5 menit",
        note: "(Dalam Rancangan penelitian ini Pemandu lapangan navigator pengemudi bus wisata Surabaya yang bersifat insidentil berposisi di tiap titik wisata yang cukup jauh ikut menghitung dan memantau jalannya perjalanan)"
    },
    {
        main: "Estimasi Wisata Dari Museum Pendidikan ke Monumen Kapal Selam berjarak 1.7 km / 5 menit",
        note: "(Dalam Rancangan penelitian ini Pemandu lapangan navigator pengemudi bus wisata Surabaya yang bersifat insidentil berposisi di tiap titik wisata yang cukup jauh ikut menghitung dan memantau jalannya perjalanan)"
    },
    {
        main: "Estimasi Wisata Dari Monumen Kapal Selam ke Alun-Alun Surabaya berjarak 2.8 km / 8 menit",
        note: "(Dalam Rancangan penelitian ini Pemandu lapangan navigator pengemudi bus wisata Surabaya yang bersifat insidentil berposisi di tiap titik wisata yang cukup jauh ikut menghitung dan memantau jalannya perjalanan)"
    },
    {
        main: "Estimasi Wisata Dari Alun-Alun Surabaya ke Kembali ke Masjid Al-Akbar berjarak 11.2 km / 34 menit",
        note: "(Dalam Rancangan penelitian ini Pemandu lapangan navigator pengemudi bus wisata Surabaya yang bersifat insidentil berposisi di tiap titik wisata yang cukup jauh ikut menghitung dan memantau jalannya perjalanan)"
    }
];

let map;
let markers = [];
let stopMarkers = []; // draggable stop markers per destination
let polyline;

// Whether stop positions should be persisted to localStorage. Users can toggle this in the UI.
let stopPersistence = true;
const storedStopPersist = localStorage.getItem('stopPersistence');
if (storedStopPersist !== null) {
    try { stopPersistence = JSON.parse(storedStopPersist); } catch (e) { stopPersistence = !!storedStopPersist; }
}

function initStopPersistenceControls() {
    const cb = document.getElementById('stop-persist');
    const clearBtn = document.getElementById('clear-stop-storage');
    if (cb) {
        cb.checked = !!stopPersistence;
        cb.addEventListener('change', () => {
            stopPersistence = !!cb.checked;
            localStorage.setItem('stopPersistence', JSON.stringify(stopPersistence));
            // re-init markers so the current session honors the new setting
            initStopMarkers();
            // update status text
            const el = document.getElementById('gps-status-text');
            if (el) {
                const persistenceText = stopPersistence ? 'Posisi disimpan' : 'Posisi tidak disimpan';
                el.textContent = el.textContent.split('·')[0].trim() + ' · ' + persistenceText;
            }
        });
    }
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            localStorage.removeItem('stopPositions');
            // if persistence is enabled, re-create defaults; otherwise just reload session markers
            initStopMarkers();
            const el = document.getElementById('gps-status-text');
            if (el) el.textContent = 'Posisi tersimpan dihapus';
            setTimeout(() => {
                // restore status text after brief notice
                initStopMarkers();
            }, 800);
        });
    }
}

function initMap() {
    map = L.map('map').setView([-7.2575, 112.7521], 12);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    renderDestinations();
    drawRoute();
    // initialize draggable stop markers (load saved positions from localStorage)
    initStopMarkers();
    // wire up the persistence controls (checkbox & clear button)
    initStopPersistenceControls();
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
            const seg = segmentEstimates[idx];
            arrow.innerHTML = `
                <span class="arrow-icon">⬇️</span>
                <span class="distance-time">
                    ${destinations[idx + 1].distance} • ${destinations[idx + 1].time}
                </span>
                <div class="segment-estimate">
                    <div class="estimate-main">${seg ? seg.main : ''}</div>
                    <div class="estimate-note">${seg ? seg.note : ''}</div>
                </div>
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
    // Use Leaflet Routing Machine to compute and draw a route following roads
    // Remove existing routing control if present
    if (typeof routingControl !== 'undefined' && routingControl) {
        map.removeControl(routingControl);
        routingControl = null;
    }

    const waypoints = destinations.map(d => L.latLng(d.lat, d.lng));

    // Create routing control using OSRM via L.Routing.osrmv1 (public demo server)
    routingControl = L.Routing.control({
        waypoints: waypoints,
        router: L.Routing.osrmv1({ serviceUrl: 'https://router.project-osrm.org/route/v1' }),
        fitSelectedRoutes: true,
        show: false,
        addWaypoints: false,
        routeWhileDragging: false,
        draggableWaypoints: false,
        createMarker: function() { return null; }, // we already have our custom markers
        lineOptions: {
            styles: [{ color: '#667eea', opacity: 0.8, weight: 4 }]
        }
    }).addTo(map);

    // Handle routing errors gracefully
    routingControl.on('routesfound', function(e) {
        // routes drawn and fit automatically
    });
    routingControl.on('routingerror', function(err) {
        console.error('Routing error:', err.error || err);
        // fallback to simple straight polyline if routing fails
        const latlngs = destinations.map(d => [d.lat, d.lng]);
        if (polyline) map.removeLayer(polyline);
        polyline = L.polyline(latlngs, { color: '#667eea', weight: 4, opacity: 0.8 }).addTo(map);
        map.fitBounds(polyline.getBounds(), { padding: [50, 50] });
    });
}

/* =====================
   STOP MARKERS (DRAGGABLE)
===================== */

function loadStopPositions() {
    try {
        const raw = localStorage.getItem('stopPositions');
        const parsed = raw ? JSON.parse(raw) : null;
        if (Array.isArray(parsed) && parsed.length === destinations.length) return parsed;
        return null;
    } catch (e) {
        return null;
    }
}

function saveStopPositions(arr) {
    try { localStorage.setItem('stopPositions', JSON.stringify(arr)); } catch (e) { console.warn('Save stopPositions failed', e); }
}

async function initStopMarkers() {
    // Determine GPS icon: prefer assets/gps.png if present, otherwise use inline SVG
    async function resolveGpsIcon() {
        const pngUrl = 'assets/gps.png';
        function pngExists() {
            return new Promise(resolve => {
                const img = new Image();
                img.onload = () => resolve(true);
                img.onerror = () => resolve(false);
                img.src = pngUrl;
            });
        }

        const hasPng = await pngExists();
        if (hasPng) {
            return { icon: L.icon({ iconUrl: pngUrl, iconSize: [34, 34], iconAnchor: [17, 34], popupAnchor: [0, -34], className: 'gps-img' }), used: 'png' };
        }

        // fallback inline SVG
        const gpsSvg = `
            <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#ff5252" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5" fill="#fff"/>
            </svg>`;
        return { icon: L.divIcon({ className: 'gps-icon', html: gpsSvg, iconSize: [28, 28], iconAnchor: [14, 28] }), used: 'svg' };
    }

    // resolve icon (async) before creating markers
    const { icon: gpsIcon, used: gpsUsed } = await resolveGpsIcon();

    // reflect status in UI if present (include persistence state)
    try {
        const el = document.getElementById('gps-status-text');
        if (el) {
            const persistenceText = stopPersistence ? 'Posisi disimpan' : 'Posisi tidak disimpan';
            el.textContent = (gpsUsed === 'png' ? 'Ikon GPS: Custom (gps.png) digunakan' : 'Ikon GPS: Bawaan (SVG) digunakan') + ' · ' + persistenceText;
        }
    } catch (e) {}

    let saved;
    if (stopPersistence) {
        saved = loadStopPositions();
        if (!saved) {
            saved = destinations.map(d => ({ lat: d.lat + 0.00018, lng: d.lng }));
            saveStopPositions(saved);
        }
    } else {
        // session-only positions; do not read/write localStorage
        saved = destinations.map(d => ({ lat: d.lat + 0.00018, lng: d.lng }));
    }

    // clear existing
    stopMarkers.forEach(m => { try { map.removeLayer(m); } catch(e){} });
    stopMarkers = [];

    destinations.forEach((dest, i) => {
        const pos = saved[i] || { lat: dest.lat + 0.00018, lng: dest.lng };
        const m = L.marker([pos.lat, pos.lng], { icon: gpsIcon, draggable: true }).addTo(map);
        m.bindTooltip(`Pemberhentian: ${dest.name}`, { direction: 'top' });

        m.on('dragend', e => {
            const p = e.target.getLatLng();
            saved[i] = { lat: p.lat, lng: p.lng };
            if (stopPersistence) saveStopPositions(saved);
        });

        m.on('click', () => { map.panTo(m.getLatLng()); });

        stopMarkers.push(m);
    });
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

function showBusMediumImage() {
    // Reuse the existing gallery modal to display the bus image
    openGallery(['assets/busMedium.png'], 'Bus Medium (35 Penumpang)');
}

/* CLOSE ON CLICK OUTSIDE */
document.getElementById('gallery-modal').addEventListener('click', e => {
    if (e.target.id === 'gallery-modal') closeGallery();
});

initMap();
