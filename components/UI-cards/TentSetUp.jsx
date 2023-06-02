import React from "react";

function TentSetUp(props) {
  return (
    <div>
      <div>
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
        <p>{props.description}</p>
      </div>

      <div>
        <h3>{props.price}</h3>
        {props.name === "TentSetup" ? (
          <div>
            <input
              name={props.name}
              type="checkbox"
              className="hidden"
              id="checkbox"
              onChange={props.tentSetUp}
            />
            <label htmlFor="checkbox"></label>
          </div>
        ) : (
          <div>
            <input
              type="checkbox"
              className="hidden"
              id="checkbox2"
              onChange={props.tentGreen}
            />
            <label htmlFor="checkbox2"></label>
          </div>
        )}
      </div>
    </div>
  );
}

export default TentSetUp;
