import Image from "next/image";
import bands from "../../public/bands.svg";
import Link from "next/link";
import { useState } from "react";


function Footer() {
 

  
    const [newLogo] = useState(bands);

    return (
      <section className={styles.rectangle}>
      <div className={styles['my-class']}>
      
       <Link href="/bands" className={styles.logo}> 
          <Image src={newLogo} alt="logo" className={styles.image} />
        </Link>
      
        <div className={styles.list}>
      <Link href="/lineup">
          <p className={styles.link}>Line-Up</p>
        </Link>
        <Link href="/schedule">
          <p className={styles.link}>Schedule</p>
        </Link>
        <Link href="/tickets">
          <p className={styles.link}>Get Tickets</p>
        </Link>
          
        </div>
       
      
    
      
      </div>
    </section>
    );
  }

export default Footer;
