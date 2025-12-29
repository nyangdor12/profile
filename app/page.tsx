import { Quattrocento, Merienda } from "next/font/google";
import styles from "./page.module.css";

const quattrocento = Quattrocento({
    variable: "--font-quattrocento",
    weight: "700",
    subsets: ["latin"]
});

const merienda = Merienda({
    variable: "--font-merienda",
    weight: "700",
    subsets: ["latin"]
});

export default function Home() {
  return (
      <div className={styles.gradient}>
        <div className={styles.page}>

            <div className={styles.header}>
                <h1 className={`${merienda.variable} antialiased ${styles.titleFirstHalf}`}>Profile</h1>
                <h1 className={styles.titleSecondHalf}>Website</h1>
            </div>
            <div className={styles.content}>
              <h1>content</h1>
            </div>
            <div className={styles.leftSide}></div>
            <div className={styles.rightSide}></div>
        </div>
      </div>
  );
}
