import Button from "../../atoms/Button";
import wallpaper from "../../../assets/wallpaper.jpg";


import styles from "./Carousel.module.scss";

function Carousel() {
  return (
    <>
      <section className={styles.CarouselSection} style={{ backgroundImage: `url(${wallpaper})` }}>
        
        <section className={styles.navContent}>
        <h1>Você pode fazer parte de uma nova banda!</h1>
        <Button variant="tertiary" text="Don't stop me now!"/>
        </section>

      </section>
    </>
  );
}

export default Carousel;
