
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: { lat: 43.6, lng: 2.3 },
    });

    const locations = [
        { lat: 43.3442, lng: 3.2140, title: "Béziers" },
        { lat: 43.1833, lng: 3.0034, title: "Narbonne" },
        { lat: 42.6986, lng: 2.8956, title: "Perpignan" },
        { lat: 43.6045, lng: 1.4442, title: "Toulouse" }
    ];

    locations.forEach(loc => {
        new google.maps.Marker({
            position: { lat: loc.lat, lng: loc.lng },
            map,
            title: loc.title
        });
    });

    // Géolocalisation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const userPos = { lat, lng };

            new google.maps.Marker({
                position: userPos,
                map,
                title: "Vous êtes ici",
                icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            });

            // Utiliser une API tierce ou Google Maps Geocoding pour obtenir la ville si besoin
        });
    }
}
