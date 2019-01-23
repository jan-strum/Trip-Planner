const mapboxgl = require('mapbox-gl');



const markMaker = (type, coord) => {

  if (type === 'activity') {
    const activityMarker = document.createElement('div')
    activityMarker.style.width = '32px';
    activityMarker.style.height = '32px';
    activityMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

    return new mapboxgl.Marker(activityMarker).setLngLat(coord);

  } else if (type === 'hotel') {
    const hotelMarker = document.createElement('div')
    hotelMarker.style.width = '32px';
    hotelMarker.style.height = '32px';
    hotelMarker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    return new mapboxgl.Marker(hotelMarker).setLngLat(coord);

  } else if (type === 'restaurant') {
    const restaurantMarker = document.createElement('div')
    restaurantMarker.style.width = '32px';
    restaurantMarker.style.height = '32px';
    restaurantMarker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";

    return new mapboxgl.Marker(restaurantMarker).setLngLat(coord);
  }
}

module.exports = markMaker // remember to import it
