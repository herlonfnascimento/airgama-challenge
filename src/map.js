'use strict';

import components from './nodeElements.js';
const { mapContainer, showMapButton } = components;

export default async function renderMap() {
  // Criando instância do mapa
  let map = L.map('map').setView([-23.5489, -46.6388], 13);

  // Adicionando Layer para visualização do mapa
  L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      minZoom: 11,
      maxZoom: 18,
      maxBoundsViscosity: 1.0,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        'pk.eyJ1Ijoicm9tdWwzbWVsbyIsImEiOiJjazl6d2x4bTAwajFhM2twb2Fzcnd4YzlkIn0._FHtl86LFjP2Zg8Z9V4I6w',
    }
  ).addTo(map);

  const uri =
    'https://v2-api.sheety.co/78ac0b75f5adec731da70cfc55eaa931/api/data';

  const response = await fetch(uri);

  const dataList = await response.json();

  const { data } = dataList;

  const buildMarker = list => {
    const positionMarkerOnMap = list.map(card => {
      let { positionLat, positionLgn } = card;

      L.marker([positionLat, positionLgn]).addTo(map);
    });

    return positionMarkerOnMap;
  };

  return buildMarker(data);
}

window.addEventListener('load', renderMap);
