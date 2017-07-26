import React from 'react';
import {Map, TileLayer, GeoJSON} from 'react-leaflet';
import statesData from '../../data/statesData';
import './Choropleth.css';

const token = 'pk.eyJ1IjoiYnJ5YW5uZXZhIiwiYSI6ImNpaHo4anBwaTA0NGJ0Z20xNWFzc2p0a2wifQ.YrgNYNaTMTiK7NkHD8z0yQ';
const Choropleth = ({asthmaPrevalence}) => (
    <div id="komodo-choropleth">
        <Map center={[37.8, -96]} zoom={4}>
            <TileLayer
                url={'http://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + token}
                id="mapbox.light"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <GeoJSON data={statesData} style={getStyle}/>
        </Map>
    </div>
);

const getColor = (d) => {
    return d > 1000 ? '#80026' :
        d > 500 ? '#BD0026' :
            d > 200 ? '#E31A1C' :
                d > 100 ? '#FC4E2A' :
                    d > 50 ? '#FD8D3C' :
                        d > 20 ? '#FEB24C' :
                            d > 10 ? '#FED976' :
                                '#FFEDA0';
}

const getStyle = (feature, layer) => ({
    fillColor: getColor(feature.properties.density),
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
});

export default Choropleth;