import React from "react";
import "../style/payment.css";
import Fee from "./Fee";

const Payment = (props) => {
  const paidEvent = props.paid;
  const eventFee = props.fee;
  return (
    <div className="payment">
      <input
        className="payment"
        type="radio"
        id="free"
        name="event"
        checked={!paidEvent}
        onChange={props.changeRadio}
      />
      <label htmlFor="free">Free event</label>
      <input
        className="payment"
        type="radio"
        id="paid"
        name="event"
        checked={paidEvent}
        onChange={props.changeRadio}
      />
      <label htmlFor="paid">Paid event</label>

      {paidEvent ? (
        <Fee
          change={props.change}
          fee={eventFee}
          errors={props.errors}
          messages={props.messages}
        />
      ) : null}
    </div>
  );
};

export default Payment;
