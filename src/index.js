import mapboxgl from 'mapbox-gl';
console.log(mapboxgl)
console.log(mapboxgl.Map)
mapboxgl.accessToken = 'pk.eyJ1Ijoiem1hcnN6YWwiLCJhIjoiY2pyOW5ud25zMGphNjQzbGluanB5b3Y3ayJ9.Mm92jc4dS81FaLIePR3cuA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

export default map
