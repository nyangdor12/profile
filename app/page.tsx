import { Quattrocento } from "next/font/google";
import Image from "next/image";
import styles from "./page.module.css";

const quattrocento = Quattrocento({
    variable: "--font-quattrocento",
    weight: "700"
});

export default function Home() {
  return (
      <>
        <div className="header">
            <h1><div className={`${quattrocento.variable} antialiased ${styles.mainTitle}`}> A Profile</div> A Website</h1>
        </div>

        <div className="content">

        </div>
      </>
  );
}
