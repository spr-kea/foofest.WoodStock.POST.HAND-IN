import React from "react";
import { useRouter } from "next/router";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import { useRef } from "react";

function step3(props) {
  const router = useRouter();
  const theForm = useRef(null);
  const ticketHolders = [];

  async function submit(e) {
    e.preventDefault();
    if (props.orderInfo.totalTickets === 1) {
      const guest = {
        first: theForm.current.elements.firstName.value,
        last: theForm.current.elements.lastName.value,
        telephone: theForm.current.elements.telephone.value,
        birthDate: theForm.current.elements.birthDate.value,
      };
      ticketHolders.push(guest);
      await props.setOrderInfo({ ...props.orderInfo, guests: ticketHolders });
    } else {
      for (let i = 0; i < props.orderInfo.totalTickets; i++) {
        const guest = {
          first: theForm.current.elements.firstName[i].value,
          last: theForm.current.elements.lastName[i].value,
          telephone: theForm.current.elements.telephone[i].value,
          birthDate: theForm.current.elements.birthDate[i].value,
        };
        ticketHolders.push(guest);
      }
      await props.setOrderInfo({ ...props.orderInfo, guests: ticketHolders });
    }
    console.log("ticketHolders array", ticketHolders);
    router.push("/tickets/step4");
  }

  function goBack() {
    router.push("/tickets/step2");
  }

  return (
    <form onSubmit={submit} ref={theForm}>
      <div className="order-container">
        <h2>Personal information</h2>
        <h5>We need some details about each person for the tickets.</h5>

        {Array.from({ length: props.orderInfo.totalTickets }, (_, i) => (
          <Accordion allowZeroExpanded key={i}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <h3 className="white">Ticket {i + 1}</h3>
                  <div className="dropdown">
                    <h3>Regular ticket</h3>
                    <h4 className="dropdown-arrow">‹</h4>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="accordion-field">
                  <label>
                    First name
                    <input title="Must be a valid First name" required pattern="[A-Za-z]{1,50}" aria-required="true" type="text" name="firstName" placeholder="John" />
                  </label>
                  <label>
                    Last name
                    <input title="Must be a valid Last name" required pattern="[A-Za-z]{1,40}" aria-required="true" type="text" name="lastName" placeholder="Applebaum" />
                  </label>
                  <label>
                    Phone Number
                    <input title="Must be a valid phone number" required pattern="[0-9+]{8,18}" aria-required="true" type="text" name="telephone" placeholder="+45 12345678" />
                  </label>
                  <label>
                    Date of Birth
                    <input title="Must be a valid Date of birth" required pattern="[0-9]" aria-required="true" type="date" name="birthDate" />
                  </label>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </div>

      <div className="booking-steps-buttons">
        <button className="secondary" onClick={goBack}>
          Back
        </button>
        <button type="submit" className="primary" onClick={submit}>
          Continue to payment →
        </button>
      </div>
    </form>
  );
}

export default step3;
