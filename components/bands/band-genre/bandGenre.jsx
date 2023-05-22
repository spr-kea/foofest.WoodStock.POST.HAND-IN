import React  from "react"; 
import styles  from "./bandGenre.module.css"; 
import singleBand from "./single-Band/singleBand"; 

function bandGenre (props){
    return (
        <article>
        <h1 className={styles.headline1}>{props.genre}</h1>
        <ul className={"styles.gridList"}>
        {props.data.map((band)=> {
            
            return (
                <singleBand
                name={band.name}
                slug={band.slug}
                key={band.slug}
                logo={band.logo}></singleBand>
            );
        })}
            </ul>
        </article>
    );
}
export default bandGenre; 