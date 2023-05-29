import styles from "./NavBar.module.css";
import Anchor from "../Anchor";
import Image from "next/image";
import bands from "../../public/bands.svg";
import Link from 'next/link';




import { useState } from "react";

function NavBar() {
  const [newLogo] = useState(bands);


<<<<<<< HEAD






  return (
=======
 return (
>>>>>>> Start-with-booking
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
<<<<<<< HEAD

    <Link href="/tickets">  
          <p>Get Tickets</p>   </Link>
=======
        <Anchor  href="/get-tickets">
>>>>>>> Start-with-booking
        
      </div>
    </section>
  );
}

export default NavBar;
