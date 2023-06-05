import styles from './homeCard.module.scss';
import Button from '../../atoms/Button';
import hand from '../../../assets/hi-5.png'
import networking from '../../../assets/networking.png'
import player from '../../../assets/guitar-player.png'
import instruments from '../../../assets/live-music.png'

function HomeCard({ title, text, btnText }) {
    return (
        <div className={styles.divCard}>
            <div className={styles.titleCardSection}>
                <img className={styles.titleImg} src={hand} alt="" />
                <h1>{title}</h1>
            </div>
            <div className={styles.cardContent}>
                <p className={styles.cardContentText}>{text}</p>
            </div>
            <div className={styles.btnSection}>
                <Button variant="primary" text={btnText} />
            </div>
        </div>
    );
  }
  
  export default HomeCard;