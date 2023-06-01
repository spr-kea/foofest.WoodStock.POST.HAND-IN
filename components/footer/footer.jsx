import Image from "next/image";
import bands from "../../public/bands.svg";
import Link from "next/link";
import { useState } from "react";
import styles from "./footer.module.css"

function Footer() {
 

  
    const [newLogo] = useState(bands);

    return (
      <section className={styles.rectangle}>
      <div className={styles['my-class']}>
      
 </div>
      
     <div className={styles.left}>
      <Link href="/bands" className={styles.logo}> 
          <Image src={newLogo} alt="logo" className={styles.image} />
        
        </Link> 
        <Link href="/tickets">
        <button className={styles.button}>Contact</button> 
        </Link>
     </div>
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
    
      <section >
        <div className="flex flex-row space-x-8 w-full mb-3 justify-around items-center text-secondary-300 font-bold">
          <Link className="flex flex-col w-28 items-center gap-2 text-lg cursor-pointer mt-3 ml-1 md:w-40 md:ml-20" href="/homepage">
            <Image src={newLogo} alt="logo" className="w-4/5" />
          
          </Link>
          <Link className="flex flex-col w-20 items-center gap-2 text-sm md:text-lg cursor-pointer mt-3 ml-360 md:w-80" href="/lineup"><p className={newLogo === bands ? "text" : ""}>Line-Up</p></Link>
          

          
          <Link className="flex flex-col w-20 items-center gap-2 text-sm md:text-lg md:w-80  cursor-pointer mt-3 ml-360" href="/schedule">
            <p>Schedule</p>
          </Link>
          <Link className="flex flex-col w-28 md:w-80 items-center gap-2 text-sm md:text-lg  cursor-pointer mt-3 ml-360" href="/tickets">
            <p>Get Tickets</p>
          </Link>



        </div>
      </section>
    );
  }

export default Footer;
