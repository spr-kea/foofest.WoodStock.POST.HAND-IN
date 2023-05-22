import React from "react";
import bandsDisplay from "../components/bands/bandsDisplay";
import { useState, useEffect } from "react";



function Bands() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://bittersweet-painted-willow.glitch.me")
      .then((res) => res.json()``)
      .then((data) => {
        setData(data);
      });
  }, []);

  function filterData() {}

  return (
    <>
      <bandsDisplay data={data} />
    </>
  );
}

export default Bands;
