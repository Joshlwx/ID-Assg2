mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaHVhbHd4IiwiYSI6ImNraWxmdGVjbzA4bGkyeXJ1cWNxeGd4MWEifQ.0n4Nn7ySBePwlbo08gBFbA';


navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-2.24, 53.48])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    })

    map.addControl(new mapboxgl.NavigationControl());

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      });
      
    map.addControl(directions, 'top-left');
    
    map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
    );

}   



