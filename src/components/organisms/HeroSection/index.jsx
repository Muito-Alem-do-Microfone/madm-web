import { Button } from "../../atoms"

import './style.scss'

function HeroSection() {
  return (
    <>
      <section
        className='hero'
      >
        <h1 className="hero__title">
          Encontre sua banda ou seu músico para seu projeto!
        </h1>
        <p className="hero__text">
          Ache grupos procurando músicos ou anuncie a vaga na sua banda de graça!
        </p>
        <div className="hero__buttons">
          <Button variant="tertiary" text="Anunciar"/>
          <Button variant="tertiary" text="Procurar"/>
        </div>
      </section>
    </>
  )
}

export default HeroSection
