import React from 'react';
import {Map, TileLayer, GeoJSON, Popup} from 'react-leaflet';
import L from 'leaflet';
import './StateTerritoryMap.css';

export default class StateTerritoryMap extends React.Component {
    constructor(props) {
        super(props);
        this.token = process.env.REACT_APP_MAPBOX_TOKEN;
        this.setPointToLayer = this.setPointToLayer.bind(this);
        this.highlightFeature = this.highlightFeature.bind(this);
        this.resetHighlight = this.resetHighlight.bind(this);
        this.clickFeature = this.clickFeature.bind(this);
        this.onEachFeature = this.onEachFeature.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.refs.geojson) {
            this.refs.state_territory_map.leafletElement.fitBounds(this.refs.geojson.leafletElement.getBounds());
        }
    }

    setPointToLayer(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: 'darkred',
            color: '#fff',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8,
        });
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
        this.props.onClickCounty(e);
    }

    onEachFeature(feature, layer) {
        if (feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon') return;

        if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
        }

        layer.on({
            mouseover: this.highlightFeature,
            mouseout: this.resetHighlight.bind(this),
            click: this.clickFeature.bind(this),
        });
    }

    render() {
        const {stateTerritoryGeoJson, activeCounty} = this.props;

        let selectedCounty;
        if(stateTerritoryGeoJson && activeCounty) {
            selectedCounty = stateTerritoryGeoJson.features.filter(st => st.properties.name === activeCounty)[0];
        }

        return (
            <section className="komodo-state-territory-map">
                <Map
                    center={[37.8, -96]}
                    zoom={4}
                    ref="state_territory_map">
                    <TileLayer
                        url={'http://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + this.token}
                        id="mapbox.light"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />

                    {stateTerritoryGeoJson &&
                    <GeoJSON
                        data={stateTerritoryGeoJson}
                        pointToLayer={this.setPointToLayer.bind(this)}
                        ref="geojson"
                        onEachFeature={this.onEachFeature}
                    />
                    }

                    {activeCounty && selectedCounty &&
                    <Popup position={selectedCounty.geometry.coordinates.reverse()}>
                        <span>{selectedCounty.properties.name}</span>
                    </Popup>
                    }
                </Map>
            </section>
        );
    }
}

