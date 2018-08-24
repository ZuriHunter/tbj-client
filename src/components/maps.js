import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoienVyaWh1bnRlcjkyIiwiYSI6ImNqYmNlOXR0bDFqNHoyd3JqejRid2I5NmEifQ.Kewvn_gXPpJ3fM-M0Zq2xg';

export default class Maps extends React.Component {

  constructor(props: Props){
    super(props)
    // Setting the default state
    this.state = {
      lat: 5,
      lng: 34,
      zoom: 1.5
    }
  }

  componentDidMount () {
    // Component readu assign the default state
    const { lng, lat, zoom } = this.state;

    // Create map object with default settings
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [ lng, lat ],
      zoom: zoom
    });

    // Set values of {lng, lat, zoom} when map is moved
    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render () {
    const { lng, lat, zoom } = this.state;

    return (
         <div>
           <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
             <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
           </div>
           <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
         </div>
       );
  }
}
