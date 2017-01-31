import React, { Component } from 'react'
import request from 'superagent'
import { Map, Marker, TileLayer } from 'react-leaflet'
import conf from '../../configuration'
import createIcon from './markerIcon'
import PlacePopup from './PlacePopup'

const position = [conf.center.lat, conf.center.lon];


class TeikeiMap extends Component {

  constructor(props) {
    super(props)
    this.state = { places: [] }
    request
      .get('/api/v1/places')
      .end((err, res) => {
        if (!err) {
          this.setState({ places: res.body })
        }
      })
  }

  render() {
    return (
      <div className="map-container">
        <Map center={position} zoom={conf.zoom.min} className="map">
          <TileLayer
            url={`//{s}.tiles.mapbox.com/v3/${conf.apiKey}/{z}/{x}/{y}.png`}
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {this.state.places.map(p =>
            <Marker
              key={p.id}
              position={{ lat: p.latitude, lon: p.longitude }}
              icon={createIcon(p.type)}
            >
              <PlacePopup place={p} />
            </Marker>)}
        </Map>
      </div>
    )
  }
}

export default TeikeiMap
