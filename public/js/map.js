// Default Map Center (Fallback)
let defaultLat = 28.6139;
let defaultLng = 77.2090;

const map = L.map('map', {
  zoomControl: false
}).setView([defaultLat, defaultLng], 12);

// Top-right Zoom Control
L.control.zoom({ position: 'topright' }).addTo(map);

// Free Watermark-Free OpenStreetMap Tile Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Custom FontAwesome Pin Icon
const customIcon = L.divIcon({
    className: 'custom-pin',
    html: `<div class="pin-icon"><i class="fa-solid fa-house"></i></div>`,
    iconSize: [42, 42],
    iconAnchor: [21, 21]
});

// Dynamic Geocoding Function (Free Nominatim API)
async function geocodeAndSetMap() {
    try {
        const searchQuery = encodeURIComponent(`${listingLocation}, ${listingCountry}`);
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery}`);
        const data = await response.json();

        if (data && data.length > 0) {
            const lat = parseFloat(data[0].lat);
            const lon = parseFloat(data[0].lon);

            // Re-center Map to fetched location
            map.setView([lat, lon], 12);

            // Add Pulsing Pin Marker
            L.marker([lat, lon], { icon: customIcon }).addTo(map)
                .bindPopup(`
                  <div style="text-align:center; padding: 4px 8px;">
                    <h6 style="margin:0; font-weight:700; color:#222222;">${listingTitle}</h6>
                    <p style="margin:2px 0 0 0; font-size:12px; color:#717171;">${listingLocation}, ${listingCountry}</p>
                  </div>
                `)
                .openPopup();
        } else {
            console.warn("Geocoding failed for given location, using fallback coordinates.");
            L.marker([defaultLat, defaultLng], { icon: customIcon }).addTo(map)
                .bindPopup(`<b>${listingTitle}</b><br>${listingLocation}`)
                .openPopup();
        }
    } catch (err) {
        console.error("Geocoding error:", err);
    }
}

// Call Geocoding Function on Load
geocodeAndSetMap();