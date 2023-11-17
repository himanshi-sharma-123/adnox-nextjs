import Image from "next/image";
import styles from "./page.module.css";
import logo from "public/logo.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} />
      </div>
      <div className={styles.menu}>
        <ul className={styles.list}>
          <li className={styles.menu1}>
            <strong>Industry Standard</strong>
          </li>
          <li className={styles.menu2}>
            <strong>Trusted By</strong>20,000 Customers
          </li>
        </ul>
      </div>
      <div className={styles.header}>
        <ul className={styles.nav}>
          <li>
            <strong>home</strong>
          </li>
          <li>
            <strong>company</strong>
          </li>
          <li>
            <strong>services</strong>
          </li>
          <li>
            <strong>resources</strong>
          </li>
          <li>
            <strong>shop</strong>
          </li>
          <li>
            <strong>contact</strong>
          </li>
        </ul>
      </div>
      <div className={styles.down}>
        <h1>discover what our experts can do for your</h1>
      </div>
    </div>
  );
}
