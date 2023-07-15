import { CardCarousel } from "../../molecules"

import "./style.scss"

const annoucements = [
  {
    id: 1,
    name: 'Erick Santos',
    instruments: 'Guitarra',
    city: 'São Paulo',
    state: 'SP',
    genres: ['Trap', 'Hardcore']
  },
  {
    id: 2,
    name: 'Guilherme Araujo',
    instruments: 'Guitarra',
    city: 'São Paulo',
    state: 'SP',
    genres: ['Trap', 'Hardcore']
  },
  {
    id: 3,
    name: 'João Jorge',
    instruments: 'Guitarra',
    city: 'São Paulo',
    state: 'SP',
    genres: ['Trap', 'Hardcore']
  },
  {
    id: 4,
    name: 'Roberto Cunha',
    instruments: 'Guitarra',
    city: 'São Paulo',
    state: 'SP',
    genres: ['Trap', 'Hardcore']
  },
  {
    id: 5,
    name: 'Erick Santos',
    instruments: 'Guitarra',
    city: 'São Paulo',
    state: 'SP',
    genres: ['Trap', 'Hardcore']
  },
  {
    id: 6,
    name: 'Gabriel Moraes',
    instruments: 'Guitarra',
    city: 'São Paulo',
    state: 'SP',
    genres: ['Trap', 'Hardcore']
  },
  {
    id: 7,
    name: 'Erick Santos',
    instruments: 'Guitarra',
    city: 'São Paulo',
    state: 'SP',
    genres: ['Trap', 'Hardcore']
  },
  {
    id: 8,
    name: 'Arthur Porto',
    instruments: 'Guitarra',
    city: 'São Paulo',
    state: 'SP',
    genres: ['Trap', 'Hardcore']
  },
  {
    id: 9,
    name: 'Erick Santos',
    instruments: 'Guitarra',
    city: 'São Paulo',
    state: 'SP',
    genres: ['Trap', 'Hardcore']
  },
  {
    id: 10,
    name: 'Leo Gomes',
    instruments: 'Guitarra',
    city: 'São Paulo',
    state: 'SP',
    genres: ['Trap', 'Hardcore']
  }
]

function AnnouncementsSection() {
  return (
    <>
      <section className='announcementSection'>
        <h1>Quem já está querendo formar banda perto de você</h1>

        <CardCarousel cards={annoucements} />
      </section>
    </>
  )
}

export default AnnouncementsSection
