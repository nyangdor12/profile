import { Quattrocento, Merienda } from "next/font/google";
import { FaGithub, FaLinkedin, FaArchive } from "react-icons/fa";
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
                          <a
                              href="https://github.com/nyangdor12"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <FaGithub className={styles.icon} />
                          </a>
                          <a
                              href="https://www.linkedin.com/in/sein-park-779063126/"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <FaLinkedin className={styles.icon}/>
                          </a>
                          <a
                              href="https://www.postype.com/@yeonjhe"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <FaArchive className={styles.icon}/>
                          </a>
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
