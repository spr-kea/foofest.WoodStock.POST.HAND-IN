import React from "react";
import NavBar from "../../components/nav-bar/NavBar";
import styles from "../tickets/ticketStyles.module.css"
import { Fireworks } from '@fireworks-js/react'



function ConfiormBooking() {
  return (

      <div >
      <NavBar/>
      <h1 className={styles.hero1}>Thank you for your purchase. You will receive your tickets via email</h1>

      <Fireworks
      options={{
        rocketsPoint: {
          min: 0,
          max: 100
        }
      }}
      style={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'fixed',
        background: '#000'
      }}
    />
    
     
   

    </div>
  );
  
}

export default ConfiormBooking;


