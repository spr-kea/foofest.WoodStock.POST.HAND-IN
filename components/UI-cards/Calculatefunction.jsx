import React from "react";
import styles from "./UI-cards/InputField.module.css";



function CalculateFunction(props) {
  const { orderInfo } = props;

  const totalVIP = 1299 * orderInfo.vipTickets;
  const totalReg = 799 * orderInfo.regularTickets;
  const grandTotal = totalVIP + totalReg + 99;

  let tentPrice = 249;
  let setUpPrice;
  let tentSize = "";

  if (orderInfo.totalTickets <= 2) {
    setUpPrice = 299;

  } else if (orderInfo.totalTickets === 3) {
    setUpPrice = 399;

  } else if (orderInfo.totalTickets === 4) {
    setUpPrice = 598;

  } else if (orderInfo.totalTickets === 5) {
    setUpPrice = 798;

  } else if (orderInfo.totalTickets === 6) {
    setUpPrice = 1198;

  } else if (orderInfo.totalTickets === 7) {
    setUpPrice = 1398;

  } else if (orderInfo.totalTickets === 8) {
    setUpPrice = 1498;

  } else if (orderInfo.totalTickets === 9) {
    setUpPrice = 1698;



  } else {
    setUpPrice =1898;

  }
  return (
    <div >
      <h3 className={styles.header}>Your order</h3>

      <section>

      {orderInfo.vipTickets  > 0 && (

          <div className={styles.header} >
            <h3 className={styles.header}>{orderInfo.vipTickets > 1 ? "VIP tickets" : "VIP ticket"}</h3>
            <h3 className={styles.header}>X{orderInfo.vipTickets}</h3>
            <h3>{totalVIP},-</h3>
          </div>

      )}
      </section>
      {orderInfo.regularTickets > 0 && (
        <section>
          <div>
            <h3>{orderInfo.regularTickets > 1 ? "Regular tickets" : "Regular ticket"}</h3>
            <h3>X{orderInfo.regularTickets}</h3>
            <h3>{totalReg},-</h3>
          </div>
        </section>
      )}

      {orderInfo.selectedArea !== "" && (
        <section>
          <h3>{orderInfo.selectedArea}</h3>
        </section>
      )}

      {orderInfo.tentService && (
        <section>
          <div className={styles.header}>
            <h3 > Tent set up</h3>
            <h3>{setUpPrice},-</h3>
          </div>
        </section>
      )}

      {orderInfo.greenCamping && (
        <section>
          <div>
            <h3 className={styles.header}>Green camping</h3>
            <h3>{tentPrice},-</h3>
          </div>
        </section>
      )}

      <section >
        <h3 > Booking fee</h3>
        <h3>1</h3>
        <h3>99,-</h3>
      </section>

      <section>
        <h3>Total</h3>
        {orderInfo.greenCamping && orderInfo.tentService ? (
          <h3>{grandTotal + tentPrice + setUpPrice},-</h3>
        ) : orderInfo.greenCamping ? (
          <h3>{grandTotal + tentPrice},-</h3>
        ) : orderInfo.tentService ? (
          <h3>{grandTotal + setUpPrice},-</h3>
        ) : (
          <h3>{grandTotal},-</h3>
        )}
      </section>

      <div >
        <div className="input">
          <h3>{props.title}</h3>
          <h3>{props.subtitle}</h3>
          <p>{props.description}</p>
        </div>

        <div className="input">
          <h3>{props.price}</h3>
          {props.name === "TentSetup" ? (
            <div className="checkboxr">
              <input
                name={props.name}
                type="checkbox"
                className="hidden"
                id="checkbox"
                onChange={props.tentSetUp}
              />
              <label htmlFor="checkbox" className="checkbox" />
            </div>
          ) : (
            <div className="container">
              <input
                type="checkbox"
                className="hidden"
                id="checkbox2"
                onChange={props.tentGreen}
              />
              <label htmlFor="checkbox2" className="checkbox-label" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CalculateFunction;
