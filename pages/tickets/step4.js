import React from "react";
import StepIndicator from "../../components/UI-components/StepIndicator";
import OrderOverview from "../../components/OrderOverview";
import MobileOrderOverview from "../../components/MobileOrderOverview";
import { useMediaQuery } from "usehooks-ts";
import InputMask from "react-input-mask";
import { useRouter } from "next/router";
import { insertOrder } from "../../modules/db";

function step4(props) {
  const matches = useMediaQuery("(min-width: 1100px)");
  const router = useRouter();

  async function confirm() {
    const request = await fetch("https://morning-mountain-4570.fly.dev/fullfill-reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: props.orderInfo.orderID }),
    });
    const response = await request.json();
    const message = response.message;

    const payload = {
      totalTickets: props.orderInfo.totalTickets,
      regTickets: props.orderInfo.regTickets,
      vipTickets: props.orderInfo.vipTickets,
      selectedArea: props.orderInfo.selectedArea,
      tentService: props.orderInfo.tentService,
      greenCamping: props.orderInfo.greenCamping,
      guestInfo: props.orderInfo.guests,
    };

    if (message === "Reservation completed") {
      router.push("/tickets/confirmation");
      const response = await insertOrder(payload);
      console.log("database response:", response);
    }
    if (message === "ID not found") {
      router.push("/tickets/timeout");
    }
  }

  function goBack() {
    router.push("/tickets/step3");
  }

  return (
    <div className="order-container">
      <section className="order-interface">
        <StepIndicator step={4} />
        <h2>Payment information</h2>
        <h5>Please enter your payment information.</h5>
        <div className="payment-field">
          <h3>Credit Card Details</h3>
          <form>
            <div>
              <label htmlFor="form-name">
                Name On Card
                <input required type="text" name="name" id="form-name" placeholder="John Appleseed" />
              </label>
            </div>
            <div>
              <label htmlFor="form-card">
                Card Number
                <InputMask required mask="9999 9999 9999 9999" maskChar={null} placeholder={"1234 1234 1234 1234"} name="cardNo" id="form-cardNo" />
              </label>

              <label htmlFor="form-expiry">
                Expiry Date
                <InputMask required mask="99/99" maskChar={null} placeholder={"12/34"} name="expiry" id="form-expiry" />
              </label>

              <label htmlFor="form-cvc">
                CVC Number
                <input required type="text" name="cvc" id="form-cvc" inputMode="numeric" maxLength="3" placeholder={123} />
              </label>
            </div>
            <div>
              <label htmlFor="form-email">
                Email
                <input required type="email" name="email" id="form-email" placeholder={"beep@boop.com"} />
              </label>

              <label htmlFor="form-phone">
                Phone number
                <InputMask mask="99 99 99 99" maskChar={null} required type="text" name="phone" id="form-phone" placeholder={"12 34 56 78"} />
              </label>
            </div>
            <div>
              <label htmlFor="form-address">
                Billing Address
                <textarea required name="address" id="form-address" placeholder="Pearstreet 72, 2020 London" />
              </label>
            </div>
          </form>
        </div>
      </section>
      {matches ? (
        <OrderOverview orderInfo={props.orderInfo} setOrderInfo={props.setOrderInfo} tentPrice={props.tentPrice} setUpPrice={props.setUpPrice} />
      ) : (
        <MobileOrderOverview orderInfo={props.orderInfo} tentPrice={props.tentPrice} setUpPrice={props.setUpPrice} />
      )}
      <div className="booking-steps-buttons">
        <button className="secondary" onClick={goBack}>
          Back
        </button>
        <button type="submit" className="primary" onClick={confirm}>
          Continue to payment →
        </button>
      </div>
    </div>
  );
}

export default step4;
