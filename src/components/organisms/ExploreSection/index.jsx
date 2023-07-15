import { ExploreItem } from '../../molecules'

import './style.scss'

function ExploreSection() {
  return (
    <>
      <section className='explore'>
        <h1 className='explore__title'>
          O que você pode fazer por aqui?
        </h1>
        <div className='explore__cards'>
          <ExploreItem
            img='hi5'
            title="Estar na cena"
            text="Faça seu cadastro e seja um(a) músico(a) que pode ser encontrado por outros músicos do mundo inteiro."
          />
          <ExploreItem
            img='networking'
            title="Conexões"
            text="Encontre outros músicos em diversas cidades ou bem perto de você. É assim que as bandas começam!"
          />
          <ExploreItem
            img='player'
            title="Buscar integrantes"
            text="Tem uma banda mas tá faltando um componente? É aqui que você vai encontrar. Faça seu anúncio!"
          />
          <ExploreItem
            img='instruments'
            title="Encontrar bandas"
            text="Ideal para quem quer fazer parte de uma banda já formada, e que está em busca de um integrante!"
          />
        </div>
      </section>
    </>
  )
}
  
export default ExploreSection