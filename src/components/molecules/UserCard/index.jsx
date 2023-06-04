import styles from "./userCard.module.scss";
import profileImg from "../../../assets/profileImg.jpg";
import Button from "../../atoms/Button";

function UserCard() {
  return (
    <div className={styles.userCard}>
      <div className={styles.profileImage}>
        <img className={styles.image} src={profileImg} alt="Foto do Perfil" />
      </div>
      <div className={styles.profileContent}>
        <h2>Erick Santos</h2>
        <p className={styles.userInfo}>Guitarrista de São Paulo - SP </p>
        <p className={styles.userInfo}>Curte trap, hardcore e Costa Gold</p>
      </div>
      <div className={styles.btnSection}>
        <Button variant="primary" text="Conectar" />
      </div>
    </div>
  );
}

export default UserCard;
