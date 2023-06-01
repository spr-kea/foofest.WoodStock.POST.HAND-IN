import React from "react";
import styles from "./ticketStyles.module.css";
import { useRouter } from "next/router";
import CulculateFunction from "../../components/UI-cards/calculatefunction";
import InputField from "../../components/UI-cards/InputField";
import SelectionAreaOptions from "../../components/UI-cards/SelectionAreaOptions";
import NavBar from "../../components/nav-bar/NavBar";

function FirstStepBooking(props) {
  const availableSpotArray = props.availableSpotData;
  const router = useRouter();

  let ticketsValid = false;

  if (props.orderInfo.totalTickets > 0) {
    ticketsValid = true;
  }
  if (props.orderInfo.totalTickets === 0) {
    ticketsValid = false;
  }

  async function confirmBooking() {
    const id = await reserveCampingSpot(props.orderInfo.selectedArea, props.orderInfo.totalTickets);
    await spotAreaValid(id);
  }

  async function spotAreaValid(id) {

    if (props.orderInfo.selectedArea == "Svartheim") {
      if (props.orderInfo.totalTickets <= availableSpotArray[0].available) {
        props.setOrderInfo({ ...props.orderInfo, validates: true, orderID: id });
        router.push("/tickets/bookingStep2");
      } else {
        props.setOrderInfo({ ...props.orderInfo, validates: false });

      }
    }
    if (props.orderInfo.selectedArea == "Nilfheim") {
      if (props.orderInfo.totalTickets <= availableSpotArray[1].available) {
        props.setOrderInfo({ ...props.orderInfo, validates: true, orderID: id });
        router.push("/tickets/bookingStep2");
      } else {
        props.setOrderInfo({ ...props.orderInfo, validates: false });

      }
    }
    if (props.orderInfo.selectedArea == "Helheim") {
      if (props.orderInfo.totalTickets <= availableSpotArray[2].available) {
        props.setOrderInfo({ ...props.orderInfo, validates: true, orderID: id });
        router.push("/tickets/bookingStep2");
      } else {
        props.setOrderInfo({ ...props.orderInfo, validates: false });

      }
    }
    if (props.orderInfo.selectedArea == "Muspelheim") {
      if (props.orderInfo.totalTickets <= availableSpotArray[3].available) {
        props.setOrderInfo({ ...props.orderInfo, validates: true, orderID: id });
        router.push("/tickets/bookingStep2");
      } else {
        props.setOrderInfo({ ...props.orderInfo, validates: false });

      }
    }
    if (props.orderInfo.selectedArea == "Alfheim") {
      if (props.orderInfo.totalTickets <= availableSpotArray[4].available) {
        props.setOrderInfo({ ...props.orderInfo, validates: true, orderID: id });
      router.push("/tickets/bookingStep2");
      } else {
        props.setOrderInfo({ ...props.orderInfo, validates: false });

      }
    }
    if (props.orderInfo.selectedArea == "") {
      props.setOrderInfo({ ...props.orderInfo, validates: false });

    }
  }

  async function reserveCampingSpot(chosenArea, chosenAmount) {
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

  function cancelBooking() {
    router.push("/");
  }


  return (
    
    <div>
    <NavBar/>
      <div className={styles.hero}>
        <h1>How this process works</h1>
              <br/>
              <p>We set 6 questions you will go through in order for us to provide you with the best experience. Once you reach the tent booking, a timeout will start to make sure you’re still there</p>
      </div>     
        <h2>Select your tickets</h2>
       
      <InputField
        updateRegularTickets={props.updateRegularTickets}
        title={"Regular"}
        name={"Regular"}
        price={"799,-"}
        setTickets={props.setTickets}
      />
      <InputField
        
        updateVIPTickets={props.updateVIPTickets}
        title={"VIP"}
        name={"VIPTicket"}
        price={"1299,-"}
      />
      <h2>Select your camping area</h2>
      <SelectionAreaOptions
      selectedArea={props.selectedArea}

        selectOption1={availableSpotArray[0]?.area}
        selectOption1Space={availableSpotArray[0]?.available}
        selectOption2={availableSpotArray[1]?.area}
        selectOption2Space={availableSpotArray[1]?.available}
        selectOption3={availableSpotArray[2]?.area}
        selectOption3Space={availableSpotArray[2]?.available}
        selectOption4={availableSpotArray[3]?.area}
        selectOption4Space={availableSpotArray[3]?.available}
        selectOption5={availableSpotArray[4]?.area}
        selectOption5Space={availableSpotArray[4]?.available}
      />
      {<CulculateFunction orderInfo={props.orderInfo} setOrderInfo={props.setOrderInfo} />}
      <div>
        <button onClick={cancelBooking}>Cancel</button>
        <button onClick={confirmBooking}>Select Camping Options</button>
      </div>
    </div>
  );
}

export default FirstStepBooking;

// Fetch data
export async function getServerSideProps() {
  const res = await fetch("https://bittersweet-painted-willow.glitch.me/available-spots");
  const availableSpotData = await res.json();

  return {
    props: { availableSpotData },
  };
}
