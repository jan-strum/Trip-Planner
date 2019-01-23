const mapboxgl = require('mapbox-gl');

const markMaker = (type, coord) => {
  console.log('hitting markMaker')

  const marker = document.createElement('div')
  marker.style.width = '32px';
  marker.style.height = '32px';

  if (type === 'activity') {
    console.log('hitting activity')
    marker.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
    return new mapboxgl.Marker(marker).setLngLat(coord);

  } else if (type === 'hotel') {
    console.log('hitting hotel')
    marker.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
    return new mapboxgl.Marker(marker).setLngLat(coord);

  } else if (type === 'restaurant') {
    console.log('hitting restaurant')
    marker.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';
    return new mapboxgl.Marker(marker).setLngLat(coord);
  }
}

module.exports = markMaker
