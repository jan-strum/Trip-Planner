const mapboxgl = require('mapbox-gl')

const activityMarker = document.createElement('div')
activityMarker.style.width = '32px';
activityMarker.style.height = '32px';
activityMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

const hotelMarker = document.createElement('div')
hotelMarker.style.width = '32px';
hotelMarker.style.height = '32px';
hotelMarker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";

const restaurantMarker = document.createElement('div')
restaurantMarker.style.width = '32px';
restaurantMarker.style.height = '32px';
restaurantMarker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";


const markMaker = (type, coord) => {
  if (type === 'activity') {
    new mapboxgl.Marker(activityMarker).setLngLat(coord).addTo(map);
  } else if (type === 'hotel') {
    new mapboxgl.Marker(hotelMarker).setLngLat(coord).addTo(map);
  } else if (type === 'restaurant') {
    new mapboxgl.Marker(restaurantMarker).setLngLat(coord).addTo(map);
  }
}

module.exports = markMaker // remember to import it
