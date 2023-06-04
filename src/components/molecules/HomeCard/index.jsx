import styles from "./homeCard.module.scss";
import Button from "../../atoms/Button";

function HomeCard() {
    return (
        <div className={styles.divCard}>
            <div>
                <h1>Estar na cena</h1>
            </div>
            <div className={styles.cardContent}>
                <p className={styles.cardContentText}>Faça seu cadastro e seja um(a) músico(a) que pode ser encontrado por outros músicos do mundo inteiro.</p>
            </div>
            <div className={styles.btnSection}>
                <Button variant="primary" text="Cadastrar" />
            </div>
        </div>
    );
  }
  
  export default HomeCard;