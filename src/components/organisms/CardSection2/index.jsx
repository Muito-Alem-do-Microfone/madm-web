import UserCard from "../../molecules/UserCard";
import styles from "./cardSection2.module.scss";

function CardSection2() {
  return (
    <>
      <section>
        <div className={styles.cardTitle}>
          <p>Quem já está querendo formar banda perto de você?</p>
        </div>

        <div className={styles.userCardSection}>
          <UserCard />
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
