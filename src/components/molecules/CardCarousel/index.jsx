import PropTypes from 'prop-types'

import { useEffect, useState } from 'react'

import { UserCard } from "../../molecules"
import './style.scss'

const CardCarousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const cardsPerPage = 3

  const autoNavigateCarousel = () => {
    if (currentIndex + 3 === cards.length) {
      setCurrentIndex(0)
      return
    }
    setCurrentIndex((prevIndex) => prevIndex + 1 )
  }

  useEffect(() => {
    const carouselInterval = setInterval(autoNavigateCarousel, 3000);

    return () => clearInterval(carouselInterval)
  }, [currentIndex])

  return (
    <div className="custom-carousel">
      <div className="carousel-container">
        <div className="cards-wrapper" style={{ transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)` }}>
          {cards.map((card, index) => (
            <div key={index} className="carousel__card">
              <UserCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

CardCarousel.propTypes = {
  cards: PropTypes.array.isRequired
}

export default CardCarousel
