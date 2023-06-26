import ExploreCard from '../../molecules/ExploreCard'

import styles from './exploreSection.module.scss';

function CardSection1() {
    return (
        <>
            <section>

                <div className={styles.cardTitle}>
                    <p>O que você pode fazer por aqui?</p>
                </div>

                <div className={styles.cardSection}>
                    <ExploreCard btnText="Cadastrar" title="Estar na cena" text="Faça seu cadastro e seja um(a) músico(a) que pode ser encontrado por outros músicos do mundo inteiro." />
                    <ExploreCard btnText="Encontrar músico" title="Conexões" text="Encontre outros músicos em diversas cidades ou bem perto de você. É assim que as bandas começam!"/>
                    <ExploreCard btnText="Anunciar" title="Buscar integrantes" text="Tem uma banda mas tá faltando um componente? É aqui que você vai encontrar. Faça seu anúncio!"/>
                    <ExploreCard btnText="Ver Mural" title="Encontrar bandas" text="Ideal para quem quer fazer parte de uma banda já formada, e que está em busca de um integrante!" />
                </div>
                    
            </section>
        </>
    );
  }
  
  export default CardSection1;