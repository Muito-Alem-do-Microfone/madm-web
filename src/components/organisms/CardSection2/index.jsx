import UserCard from "../../molecules/UserCard"
import styles from "../CardSection1/cardSection.module.scss";

function CardSection2() {
    return (
        <>
            <section>

                <div className={styles.cardTitle}>
                    <p>Quem já está querendo formar banda perto de você?</p>
                </div>

                <div>
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                </div>
                    
            </section>
        </>
    );
  }
 
  export default CardSection2;