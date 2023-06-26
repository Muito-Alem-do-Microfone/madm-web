import { useEffect, useRef, useState } from 'react'
import MapPoint from '../../atoms/MapPoint'
import OverlayContainer from '../../atoms/OverlayContainer'

function Map({ center, zoom, announcements }) {
  const ref = useRef(null)
  const [map, setMap] = useState(null)

  useEffect(() => {
    if (ref.current) {
      let createdMap = new window.google.maps.Map(
        ref.current,
        {
          zoom,
          center,
          disableDefaltUI: true,
          clickableIcons: false,
        }
      )
      setMap(createdMap)
    }
  }, [center, zoom])


  return <div style={{ height: '100vh', width: '100vw' }} ref={ref} id='map' className="map">
      {
        announcements.map((announcement, index) => (
          <OverlayContainer
            map={map}
            position={{
              lat: announcement.latitude,
              lng: announcement.longitude,
            }}
            key={index}
          >
            <MapPoint
              title={announcement.title}
              description={announcement.description}
              genre={announcement.genre}
            />
          </OverlayContainer>
        ))
      }
    </div>
}

export default Map
