import React from "react";
import styles from "./bandsDisplay.module.css";
import bandGenre from "./band-genre/bandGenre";
import Anchor from "/Anchor"; 



function bandsDisplay (props){
    const arrayRock=filterFunction ("Rock");
    const arraySoul= filterFunction("Soul");
    const arrayCountry=filterFunction("Country");
    const arrayPunk=filterFunction("Punk");
    const arrayElectronic=filterFunction("Electronic");
    const arrayRap=filterFunction("Rap");
    const arrayWorldMusic=filterFunction("World");
    const arrayPop=filterFunction("Pop");
}
function filterFunction (genre){
    const functionValue=genre;
    const arrayValue=[...props.data]; 


    return arrayValue.filter(filterFunctionGenre);

function filterFunctionGenre (band){
    if (band.genre===functionValue){
        return band; 

    }else{
        return 0; 
    }
}


return (
<section>
<h1>Artists </h1>
  <bandGenre genre="Country" data={arrayCountry} />
        <bandGenre genre="Electronic" data={arrayElectronic} />
        <bandGenre genre="Pop" data={arrayPop} />
        <bandGenre genre="Punk" data={arrayPunk} />
        <bandGenre genre="Rap" data={arrayRap} />
        <bandGenre genre="Rock" data={arrayRock} />
        <bandGenre genre="Soul" data={arraySoul} />
        <bandGenre genre="World" data={arrayWorldMusic} />
</section>
);
}

export default bandsDisplay; 