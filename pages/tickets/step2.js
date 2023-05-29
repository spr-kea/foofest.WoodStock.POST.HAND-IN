import React from "react";
import { useRouter } from "next/router";

function step2(props) {
  const router = useRouter();

  function nextStep() {
    router.push("/tickets/step3");
  }

  function goBack() {
    router.push("/tickets/step1");
  }

  return (
    <div className="order-container">
      <h2>Tent options</h2>
      <InputCheck tentSetUp={props.tentSetUp} title={"We can set up your tent(s)"} name={"TentSetup"} subtitle={props.tentSize} description={"Tents are included in price."} price={`${props.setUpPrice},-`} />

      <InputCheck tentGreen={props.tentGreen} title={"Green camping"} name={"TentGreen"} subtitle={"Sustainable tents"} description={"Tent made from recycled materials."} price={`${props.tentPrice},-`} />

      <p className="bookingfee">
        <strong>NOTE:</strong> A mandatory booking fee of 99,- applies for each order.
      </p>

      <div className="booking-steps-buttons">
        <button className="secondary" onClick={goBack}>
          Back
        </button>
        <button className="primary" onClick={nextStep}>
          Continue to details →
        </button>
      </div>
    </div>
  );
}

export default step2;
