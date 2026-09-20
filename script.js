// Inicjalizacja mapy (Polska)
const map = L.map('map').setView([52.237049, 21.017532], 6);

// Warstwa mapy (OpenStreetMap)
L.tileLayer(
    'https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        maxZoom: 20
    }
).addTo(map);
// Ikony

const pin1420 = L.divIcon({
  html: '<img src="assets/pin1420.png" class="map-point-inner">',
  className: 'map-point-wrapper',
  iconSize: [30, 30],
  iconAnchor: [15, 30]
});

const pin1470 = L.divIcon({
  html: '<img src="assets/pin1500.png" class="map-point-inner">',
  className: 'map-point-wrapper',
  iconSize: [30, 30],
  iconAnchor: [15, 30]
});

const pin1500 = L.divIcon({
  html: '<img src="assets/pin1470.png" class="map-point-inner">',
  className: 'map-point-wrapper',
  iconSize: [30, 30],
  iconAnchor: [15, 30]
});



document.querySelectorAll('.submenu button').forEach(button => {
  button.addEventListener('click', () => {
    const place = button.dataset.place;

    if (!place) return; // 🔥 zabezpieczenie

    const placeData = placesData[place];

    if (placeData && placeData.coords) {
      map.flyTo(placeData.coords, 14, { duration: 1.5 });
    }
  });
});







const placesData = {
  ptaszkowa: {
    coords: [49.6074350929353, 20.86981872840729],
    icon: pin1420,
    title: "Ptaszkowa",
    description: `
    <p>1440 r.</p>
   
  `,
    photos: ["assets/IMG_8851.jpg"]
  },
  sromowce: {
    coords: [49.39365487899059, 20.40332294009173],
    icon: pin1420,
    title: "Sromowce Niżne",
    description: `
    <p>1461 r.</p>
    
  `,
    photos: ["assets/IMG_8856.jpg"]
  },
  wołowiec: {
    coords: [49.516816205312445, 21.35784798398352],
    icon: pin1420,
    title: "Wołowiec",
    description: `
    <p>1461 r.</p>
    
  `,
    photos: ["assets/IMG_8857.jpg"]
  },
  opatówek: {
    coords: [51.74004559005405, 18.222001956689578],
    icon: pin1420,
    title: "Opatówek",
    description: `
    <p>1463 r.</p>
    
  `,
    photos: ["assets/IMG_8858.jpg"]
  },
  racławice: {
    coords: [50.20176291441054, 19.675993216448237],
    icon: pin1470,
    title: "Racławice Olkuskie",
    description: `
    <p>1473 r.</p>
    
  `,
    photos: ["assets/IMG_8859.jpg"]
  },
   trzebunia: {
    coords: [49.78747521911805, 19.84048658592871],
    icon: pin1420,
    title: "Trzebunia",
    description: `
    <p>1427 r.</p>
    
  `,
    photos: ["assets/IMG_8855.jpg"]
  },
  
   łopuszna: {
    coords: [49.47431312614562, 20.13022244839306],
    icon: pin1420,
    title: "Łopuszna",
    description: `
    <p>1454 r.</p>
    
  `,
    photos: ["assets/IMG_8852.jpg"]
  },

   przydonica: {
    coords: [49.73424022123379, 20.77415414323588],
    icon: pin1420,
    title: "Przydonica",
    description: `
    <p>1456 r.</p>
    
  `,
    photos: ["assets/IMG_8854.jpg"]
  },

   paczółtowice: {
    coords: [50.17823339652147, 19.658402794557748],
    icon: pin1420,
    title: "Paczółtowice",
    description: `
    <p>1464 r.</p>
   
  `,
    photos: ["assets/IMG_8853.jpg"]
  },
  olkusz: {
    coords: [50.278888028692634, 19.5584908],
    icon: pin1470,
    title: "Olkusz",
    description:  `
    <p>1485-6 r.</p>
   
  `,
    photos: ["assets/IMG_0407.jpg"]
  },

 
  cięcina: {
    coords: [49.615627095788774, 19.137446353311432],
    icon: pin1470,
    title: "Cięcina",
    description: `
    <p>???</p>
   
  `,
    photos: ["assets/a30cc5b36656097b8b95417356464731.jpg"]
    
  },
  stwosz: {
    coords: [50.06177540638734, 19.939368842328406],
    icon: pin1470,
    title: "Wit Stwosz - ołtarz w kościele Mariackim",
    description: `
    <p>1477-89(6) r.</p>
    
  `,
    photos: ["assets/wit-stwosz-oltarz-mariacki-3.jpg"]
  },
  
   dominikanie: {
    coords: [50.05944612557631, 19.93912729750981],
    icon: pin1470,
    title: "Kraków - dominikanie",
    description: `
    <p></p>
   
  `,
    photos: ["assets/IMG_0414.jpg"]
  },
   sienno: {
    coords: [49.714457276460074, 20.707536074765144],
    icon: pin1470,
    title: "Sienno",
    description: `
    <p></p>
    
  `,
    
    photos: ["assets/IMG_0406.jpg"]
  },

  kusnierzy: {
    coords: [49.77418770312795, 20.23631682633311],
    icon: pin1470,
    title: "Kraków - kościół Mariacki - kaplica Kuśnierzy",
    description: `
    <p></p>
    
  `,
    photos: ["assets/IMG_0408.jpg"]
  },

  zborowek: {
    coords: [49.77418770312795, 20.23631682633311],
    icon: pin1470,
    title: "Zborówek",
    description: `
    <p></p>
    
  `,
    photos: [""]
  },
   krzyz: {
    coords: [50.054754176257426, 19.93548985518123],
    icon: pin1470,
    title: "Wawel - kaplica Krzyża Św. ",
    description: `
    <p></p>
   
  `,
    photos: ["assets/IMG_0409.jpg"]
  },

   ksiaznice: {
    coords: [50.16566205116348, 20.5256418881726],
    icon: pin1470,
    title: "Książnice Wielkie",
    description: `
    <p></p>
    
  `,
    photos: ["assets/IMG_0410.jpg"]
  },
  
  szaniec: {
    coords: [50.517836615603485, 20.686758877070297],
    icon: pin1470,
    title: "Szaniec",
    description: `
    <p></p>
    
  `,
    photos: ["assets/IMG_0411.jpg"]
  },
    barcice: {
    coords: [49.52471468264338, 20.651202147820815],
    icon: pin1470,
    title: "Barcice",
    description: `
    <p></p>
    
  `,
    photos: ["assets/IMG_0412.jpg"]
  },
    rabka: {
    coords: [49.61810015039809, 19.9639762240438],
    icon: pin1470,
    title: "Rabka",
    description: `
    <p></p>
    
  `,
    photos: ["assets/IMG_0413.jpg"]
  },

  włocławek: {
    coords: [52.63994123140263, 19.09619133942207],
    icon: pin1470,
    title: "Włocławek",
    description: `
    <p></p>
    
  `,
    photos: ["assets/IMG_8841.jpg"]
  },

  jodłownik: {
    coords: [49.77418770312795, 20.23631682633311],
    icon: pin1470,
    title: "Jodłownik (dominikanie - Kraków)",
    description: `
    <p>1496 r.</p>
    
  `,
    photos: ["assets/CopernicusHouse.jpg", "assets/Dom_kopernika_2,_ul_kopernika.jpg", "assets/dom-kopernika.jpg", "assets/568fe1ca46576.jpg"]
  },
  
};

Object.keys(placesData).forEach(placeKey => {
  const place = placesData[placeKey];

  const marker = L.marker(place.coords, {
    icon: place.icon
  }).addTo(map);

  marker.on('click', () => {
    openPanels(placeKey);
  });
});

let currentPhoto = 0;


function openPanels(placeKey) {
  const data = placesData[placeKey];

  // tekst
  document.getElementById('placeTitle').textContent = data.title;
  document.getElementById('placeDescription').innerHTML = data.description;

  // zdjęcia
  currentPhoto = 0;
  document.getElementById('photoImage').src = data.photos[0];

  

  // pokaż
  document.getElementById('infoPanel').style.display = 'block';
  document.getElementById('photoPanel').style.display = 'block';
  

  currentPlace = placeKey;
}

document.getElementById('nextPhoto').onclick = () => {
  const data = placesData[currentPlace];
  currentPhoto = (currentPhoto + 1) % data.photos.length;
  document.getElementById('photoImage').src = data.photos[currentPhoto];
};

document.getElementById('prevPhoto').onclick = () => {
  const data = placesData[currentPlace];
  currentPhoto = (currentPhoto - 1 + data.photos.length) % data.photos.length;
  document.getElementById('photoImage').src = data.photos[currentPhoto];
};



function closePanels() {
  document.getElementById('infoPanel').style.display = 'none';
  document.getElementById('photoPanel').style.display = 'none';
  
}

map.on('click', () => {
  closePanels();
});



const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');

// klik w zdjęcie galerii
document.getElementById('photoImage').onclick = () => {
  lightbox.style.display = 'flex';
  lightboxImage.src = document.getElementById('photoImage').src;
};



lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
let currentPlace = null;