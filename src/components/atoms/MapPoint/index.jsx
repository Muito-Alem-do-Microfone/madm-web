import { useEffect, useRef, useState } from "react"
import AnnouncementCard from "../../announcementCard"
import AnnouncementPoint from "../../announcementPoint"

const MapPoint = (props) => {
  const [opened, setIsOpened] = useState(false)
  const handleOnOpen = () => setIsOpened(true)
  const handleOnClose = () => setIsOpened(false)
  const containerRef = useRef(null)

  // Hook for handle outside click - simple implementation from stack overflow
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpened(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  return (<div ref={containerRef}>
    {opened ?
      <AnnouncementCard
        title={props.title}
        description={props.description}
        genre={props.genre}
        handleClose={handleOnClose}
      /> :
      <AnnouncementPoint
        title={props.title}
        onClick={handleOnOpen}
      />}
  </div>)
}

export default MapPoint