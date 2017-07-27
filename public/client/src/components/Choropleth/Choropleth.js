import React from 'react';
import {Map, TileLayer, GeoJSON} from 'react-leaflet';
import './Choropleth.css';

export default class Choropleth extends React.Component {
    constructor(props) {
        super(props);
        //TODO: Pull this into env file
        this.token = process.env.REACT_APP_MAPBOX_TOKEN;
        this.onEachFeature = this.onEachFeature.bind(this);
        this.getColor = this.getColor.bind(this);
        this.getStyle = this.getStyle.bind(this);
        this.highlightFeature = this.highlightFeature.bind(this);
        this.resetHighlight = this.resetHighlight.bind(this);
        this.clickFeature = this.clickFeature.bind(this);
        this.resetMap = this.resetMap.bind(this);
    }

    getColor(d) {
        return d > 1000000 ? '#80026' :
            d > 660000 ? '#BD0026' :
                d > 330000 ? '#E31A1C' :
                    d > 100000 ? '#FC4E2A' :
                        d > 66000 ? '#FD8D3C' :
                            d > 33000 ? '#FEB24C' :
                                d > 10000 ? '#FED976' :
                                    '#FFEDA0';
    }

    getStyle(feature, layer) {
        return {
            fillColor: this.getColor(feature.properties.density),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7,
        }
    }

    highlightFeature(e) {
        const layer = e.target;
        layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7,
        });

        // Doesn't work in IE, opera, or edge. Need to check browser before doing.
        layer.bringToFront();
    }

    resetHighlight(e) {
        this.refs.geojson.leafletElement.resetStyle(e.target)
    }

    clickFeature(e) {
        // this.refs.choropleth_map.leafletElement.fitBounds(e.target.getBounds());
        // this.props.onClickState(e);
        this.props.history.push('/state/' + e.target.feature.properties.name);
    }

    resetMap(e) {
        this.props.onResetMap(e);
        this.props.history.push('/');
    }

    onEachFeature(feature, layer) {
        // if(feature.properties && feature.properties.name) {
        //     layer.bindPopup(feature.properties.name);
        // }

        layer.on({
            mouseover: this.highlightFeature,
            mouseout: this.resetHighlight.bind(this),
            click: this.clickFeature.bind(this),
        });
    }

    render() {
        const {
            asthmaPrevalenceGeoJson,
            mapCenter,
            mapZoom,
            mapBounds,
        } = this.props;

        return (
            <div className="komodo-choropleth">
                {/*<button onClick={this.resetMap}>Reset Map</button>*/}
                <Map
                    center={mapCenter}
                    zoom={mapZoom}
                    ref="choropleth_map"
                    bounds={mapBounds}
                >
                    <TileLayer
                        url={'http://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + this.token}
                        id="mapbox.light"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {asthmaPrevalenceGeoJson &&
                    <GeoJSON
                        data={asthmaPrevalenceGeoJson}
                        style={this.getStyle}
                        onEachFeature={this.onEachFeature}
                        ref="geojson"
                    />
                    }
                </Map>

            </div>
        );
    }
}
