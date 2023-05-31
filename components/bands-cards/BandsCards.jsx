import React from "react";
import Image from "next/image";
import styles from "./BandsCards.module.css";
import BandsGenre from "./bands-genre/BandsGenre";
import NavBar from "../nav-bar/NavBar";
import { useState } from "react";
import bands1 from "../../public/bands1.svg";

function Bands(props) {
  const [newLogo] = useState(bands1);
  console.log(props.data);
  const rockArr = handleFilter("Rock");
  const punkArr = handleFilter("Punk");
  const soulArr = handleFilter("Soul");
  const countryArr = handleFilter("Country");
  const rapArr = handleFilter("Rap");
  const electronicArr = handleFilter("Electronic");
  const worldArr = handleFilter("World");
  const popArr = handleFilter("Pop");

  function handleFilter(genre) {
    const filterValue = genre;
    const filteredArray = [...props.data];
    return filteredArray.filter(filterByGenre);

    function filterByGenre(band) {
      if (band.genre === filterValue) {
        return band;
      } else {
        return 0;
      }
    }
  }

  return (
    <section >

      <NavBar active="bands"></NavBar>
      <div className={styles.container}>
     <div className={styles.zektion}>
      <Image className={styles.neonEffekt} src={newLogo} alt="logo"></Image></div>
      <div className={styles.hero}> <h1>Hello</h1><br/><p>We’ve got a few options for bookings so why not let us help you find the right one for you. Start the process below, we promise its not a horrible experience..</p>
      <button className={styles.find}>
      Find Ticktes
                </button></div>
                <div className={styles.who}> <h1>Who are we?</h1><br/><p>Get ready to experience the ultimate music festival extravaganza with Foo Festival - where world-class artists, delicious food, and unforgettable moments come together in one epic weekend!</p>
     </div>
     <div className={styles.visit}> <h1>VISIT OUR <span className={styles.event}>EVENT</span>  PAGE FOR <br />BAND INFO <br />SCHEDUALE <br />ETC</h1>
     </div>
     
    
        <div className={styles.lineUp}> Line-Up</div>
      <div className={styles.bandz}>
      <BandsGenre genre="Country" data={countryArr} />
        <BandsGenre genre="Electronic" data={electronicArr} />
        <BandsGenre genre="Pop" data={popArr} />
        <BandsGenre genre="Punk" data={punkArr} />
        <BandsGenre genre="Rap" data={rapArr} />
        <BandsGenre genre="Rock" data={rockArr} />
        <BandsGenre genre="Soul" data={soulArr} />
        <BandsGenre genre="World" data={worldArr} />
      </div></div>
    </section>
  );
}

export default Bands;
