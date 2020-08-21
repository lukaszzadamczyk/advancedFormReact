import React from "react";
import "../style/fee.css";
const Fee = (props) => {
  return (
    <>
      <input
        placeholder="Fee"
        className="fee"
        name="event_fee"
        type="number"
        value={props.fee === 0 ? <span>fee</span> : props.fee}
        onChange={props.change}
      />
      <span className="fee">$</span>
    </>
  );
};

export default Fee;
