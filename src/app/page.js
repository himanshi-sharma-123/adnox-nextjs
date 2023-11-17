import Image from "next/image";
import styles from "./page.module.css";
import logo from "public/logo.png";
import image1 from "public/image1.png";
import image2 from "public/image2.png";
import image3 from "public/image3.png";
import image4 from "public/image4.png";
import image5 from "public/image5.png";
import image6 from "public/image6.png";
import image7 from "public/image7.png";
import image8 from "public/image8.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src={logo} className={styles.img} />
      </div>
      <div className={styles.floatLeft}>
        <Image src={image1} className={styles.img1} />
        <Image src={image2} className={styles.img2} />
        <Image src={image3} className={styles.img3} />
        <Image src={image4} className={styles.img4} />
      </div>
      <div className={styles.floatright}>
        <Image src={image5} className={styles.img5} />
        <Image src={image6} className={styles.img6} />
        <Image src={image7} className={styles.img7} />
        <Image src={image8} className={styles.img8} />
      </div>

      <div className={styles.item}>
        <h1 className={styles.title}>
          <span className={styles.title1}>discover what our </span>
          <span className={styles.title2}>experts can do for your</span>
        </h1>
        <p className={styles.desc}>
          <span className={styles.desc1}>
            We plan, implement and support your digital workplace technology,
          </span>
          <span className={styles.desc2}>
            enabling you to run your business smoothly and securely
          </span>
        </p>
      </div>
    </div>
  );
}
