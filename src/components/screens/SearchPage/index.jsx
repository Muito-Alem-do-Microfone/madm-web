import { useEffect, useState } from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper"
import Map from '../../molecules/Map'
import Select from 'react-select'

import {Genres} from '../../../dummyData/genres.json'
import {DefaultSubgenres} from '../../../dummyData/subgenres.json'

const SearchPage = () => {

  const render = (status) => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>
    if (status === Status.FAILURE) return <h3>{status} ...</h3>
    return <></>
  }

  const [currentLat, setCurrentLat] = useState(0)
  const [currentLng, setCurrentLng] = useState(0)
  const [announcements, setAnnouncements] = useState([])
  const [genre, setGenre] = useState(0)
  const [subgenres, setSubgenres] = useState(0)
  const [filteredSubgenres, setFilteredSubgenres] = useState([])

  var geoLocationOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/announcements/search?latitude=-23.447784750886235&longitude=-46.61299214726378&range=500', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg3NzU0MzAzLCJleHAiOjE2ODc4NDA3MDN9.7vuyiFupXigpDP66YVMJVmhGg0FpXtKPe7_HtKq79sg'
          }
        });
        const data = await response.json();
        setAnnouncements(data);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLat(position.coords.latitude)
        setCurrentLng(position.coords.longitude)
      },
      (error) => {
        console.log(error)
        setCurrentLat(0)
        setCurrentLng(0)
      },
      geoLocationOptions
    )
  }, [])

  useEffect(() => {
    if (genre > 0) {
      const filteredSubgen = DefaultSubgenres.filter(subgenre => subgenre.genre_id == genre)
      filteredSubgen.forEach(subgen => {
        subgen.value = subgen.id
        subgen.label = subgen.name
      })
      setFilteredSubgenres(filteredSubgen)
    }
  }, [genre])

  const changeGenre = (genre) => {
    setGenre(genre)
    setSubgenres([])
  }

  return (
    <div className='App'>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{
          width: '25%',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          padding: '20px'
        }}>
          <h4>Gênero</h4>
          <select defaultValue={0} onChange={(e) => changeGenre(e.target.value)}>
            <option value={0}>Selecione uma opção</option>
            {Genres.map((genre) => (
              <option key={genre.id} value={genre.id}>{genre.name}</option>
            ))}
          </select>
          {genre > 0 ?
            <Select
            options={filteredSubgenres}
            isMulti={true}
            onChange={(values) => setSubgenres(values)}
            value={subgenres}
          /> : <></>}
        </div>
        <Wrapper apiKey={'AIzaSyCCzd4zhLwY1yFjeyBdLZm_SE3HJZCFdP0'} render={render}>
          <Map announcements={announcements} center={{ lat: currentLat, lng: currentLng }} zoom={12}/>
        </Wrapper>
      </div>
    </div>
  )
}

export default SearchPage