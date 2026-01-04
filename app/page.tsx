import { Quattrocento, Merienda } from "next/font/google";
import styles from "./page.module.css";
import Card from "./_components/card";

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
      <div className={styles.background}>
          <div className={styles.gradient}>
              <div className={styles.page}>

                  <div className={styles.header}>
                      <h1 className={`${merienda.variable} antialiased ${styles.titleFirstHalf}`}>Profile</h1>
                      <h1 className={styles.titleSecondHalf}>Website</h1>
                  </div>
                  <div className={styles.content}>
                      <div className={styles.links}>

                      </div>
                      <Card></Card>
                  </div>
                  <div className={styles.leftSide}></div>
                  <div className={styles.rightSide}></div>
              </div>
          </div>
      </div>
  );
}
