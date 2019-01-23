const mapboxgl = require('mapbox-gl');
const marker = require('./marker')
mapboxgl.accessToken = 'pk.eyJ1Ijoiem1hcnN6YWwiLCJhIjoiY2pyOW5ud25zMGphNjQzbGluanB5b3Y3ayJ9.Mm92jc4dS81FaLIePR3cuA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.641, 41.895], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

const domElement = document.createElement('div')
domElement.style.width = '32px';
domElement.style.height = '32px';
domElement.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';


new mapboxgl.Marker(domElement).setLngLat([-87.641, 41.895]).addTo(map);

const newMarker = marker('restaurant', [-87.64, 41.894])
const anotherMarker = marker('hotel', [-88.64, 42.894])
newMarker.addTo(map);
anotherMarker.addTo(map)

module.exports = map
