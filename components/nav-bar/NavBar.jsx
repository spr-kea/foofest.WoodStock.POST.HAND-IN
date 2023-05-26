import styles from "./NavBar.module.css";
import Anchor from "../Anchor";
import Image from "next/image";
import bands from "../../public/bands.svg";





import { useState } from "react";

function NavBar(props) {
  const [newLogo] = useState(bands);



  const [scheduleClass] = useState("");




  return (
    <section className={styles.navbarWrapper}>
      <div className={styles.navbar}>
       
      <Anchor className={styles.logo} href="/bands">
      <Image src={newLogo} alt="logo"></Image></Anchor>
      <Anchor className={styles.header} href="/bands">
        
          <p>Line-Up</p>
        </Anchor>
        <Anchor className={styles.header} href="/schedule">
        
          <p>Schedule</p>
        </Anchor>
        <Anchor  href="/booking">
        
          <p>Get Tickets</p>
        </Anchor>
      </div>
    </section>
  );
}

export default NavBar;
