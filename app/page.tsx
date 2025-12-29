import { Quattrocento } from "next/font/google";
import Image from "next/image";
import styles from "./page.module.css";

const quattrocento = Quattrocento({
    variable: "--font-quattrocento",
    weight: "700",
    subsets: ["latin"]
});

export default function Home() {
  return (
      <div className={styles.gradient}>
        <div className={styles.page}>

            <div className={styles.header}>
                <h1><div className={`${quattrocento.variable} antialiased ${styles.mainTitle}`}> A Profile</div> A Website</h1>
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
