import HomeCard from "../../molecules/HomeCard"

import styles from "./cardSection.module.scss";

function CardSection1() {
    return (
        <>
            <section>

                <div className={styles.cardTitle}>
                    <p>O que você pode fazer por aqui?</p>
                </div>

                <div className={styles.cardSection}>
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                </div>
                    
            </section>
        </>
    );
  }
  
  export default CardSection1;