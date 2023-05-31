import Image from "next/image";
import bands from "../../public/bands.svg";
import Link from "next/link";
import { useState } from "react";

function Footer() {
  const [newLogo] = useState(bands);

  return (
    <section>
      <div>

      <img src="/logo.png" alt="Logo" className="logo" />

      <button className="contact-button">Contact Us</button>


        <Link>
          <Image src={newLogo} alt="logo" className="w-4/5" />
    
        </Link>



        <Link  href="/lineup">    <p className={newLogo === bands ? "text" : ""}>Line-Up</p></Link>
        
        <Link href="/schedule">
          <p>Schedule</p>
        </Link>

        <Link  href="/tickets">
          <p>Get Tickets</p>
        </Link>


      </div>
    </section>
  );
}

export default Footer;
