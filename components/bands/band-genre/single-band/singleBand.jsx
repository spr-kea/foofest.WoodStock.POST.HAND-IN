import React from "react";
import Image from "next/image"; 
import Anchor from "../../../Anchor";
import styles from "./singleBand.module.css"; 


function singleBand (props){
    const serverUrl="https://bittersweet-painted-willow.glitch.me/";
    
    return (
        <li>
        <Anchor href={`/bands/${props.slug}`}
   clasName={styles.BandsGrid}>
   <h2>{props.name}</h2>
        <Image  className={styles.img} alt={props.slug} src={props.logo.includes("http") ? props.logo:`${serverUrl}/logos/${props.logo}`} width="350" height="300" />
        
        </Anchor>
        </li>
    );



}
