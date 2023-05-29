import React from "react";
import { useRouter } from "next/router";

function Step1(props) {
  const areaArray = props.availableSpotData;
  const router = useRouter();
  let ticketsValid = props.orderInfo.totalTickets > 0;

  async function validateAndReserve() {
    const id = await reserveSpot(props.orderInfo.selectedArea, props.orderInfo.totalTickets);
    await validateArea(id);
  }

  async function validateArea(id) {
    const area = props.orderInfo.selectedArea;
    const index = areaArray.findIndex((item) => item.area === area);
    const available = areaArray[index]?.available || 0;

    if (props.orderInfo.totalTickets <= available) {
      props.setOrderInfo({ ...props.orderInfo, validates: true, orderID: id });
      console.log("area validation: all good");
      router.push("/tickets/step2");
    } else {
      props.setOrderInfo({ ...props.orderInfo, validates: false });
      console.log("area validation: no bueno");
    }
  }

  async function reserveSpot(chosenArea, chosenAmount) {
    const request = await fetch("https://bittersweet-painted-willow.glitch.me/reserve-spot", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ area: chosenArea, amount: chosenAmount }),
    });

    const response = await request.json();
    const id = response.id;
    console.log("id:", id);
    return id;
  }

  function goBack() {
    router.push("/");
  }

  return (
    <div className="order-container">
      <h2>Select your tickets</h2>
      <InputCounter updateRegTickets={props.updateRegTickets} title={"Regular"} name={"RegTicket"} subtitle={"All days"} description={"Access to concerts and vendors."} price={"799,-"} setTickets={props.setTickets} />
      <InputCounter updateVIPTickets={props.updateVIPTickets} title={"VIP"} name={"VIPTicket"} subtitle={"All days"} description={"Includes food & drink discounts and early access to stages."} price={"1299,-"} />
      <h2>Select your camp area</h2>
      <InputDrop
        selectArea={props.selectArea}
        optionOne={areaArray[0]?.area}
        optionOneSpace={areaArray[0]?.available}
        optionTwo={areaArray[1]?.area}
        optionTwoSpace={areaArray[1]?.available}
        optionThree={areaArray[2]?.area}
        optionThreeSpace={areaArray[2]?.available}
        optionFour={areaArray[3]?.area}
        optionFourSpace={areaArray[3]?.available}
        optionFive={areaArray[4]?.area}
        optionFiveSpace={areaArray[4]?.available}
      />
      {!ticketsValid && <p className="feedback">Please add at least one ticket to your order.</p>}
      {props.orderInfo.validates === false && <p className="feedback">Please select an area with enough space for the amount of tickets.</p>}
      <div className="booking-steps-buttons">
        <button className="secondary" onClick={goBack}>
          Cancel
        </button>
        <button className="primary" onClick={validateAndReserve}>
          Select camp options →
        </button>
      </div>
    </div>
  );
}

export default Step1;

// Fetch data
export async function getServerSideProps() {
  const response = await fetch("https://bittersweet-painted-willow.glitch.me/available-spots");
  const availableSpotData = await response.json();
  console.log(availableSpotData);

  return {
    props: { availableSpotData },
  };
}
