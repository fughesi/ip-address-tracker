import React from 'react'
import "./Map.css"

export default function Map() {
  var map = L.map('map').setView([51.505, -0.09], 13)
  return (
    <main id="mapMain">{map}</main>
  )
}
