import React, {useEffect} from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

mapboxgl.accessToken = 'pk.eyJ1IjoieW9rZXNoOTgiLCJhIjoiY2t2bmdhYjIzOXAxaDJ1czdxbHY2aWZiZCJ9.OQoXwzByYOCXmx3dRnQNXQ';

function Map() {

    useEffect(() => {
        const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-99.29011, 39.39172],
        zoom: 5
        });
    });

    return (
        <Wrapper id="map"></Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
flex-1
`

