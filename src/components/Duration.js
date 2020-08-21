import React from "react";
import "../style/duration.css";

const Duration = (props) => {
  return (
    <>
      <input
        className="duration"
        placeholder="Number"
        type="number"
        name="duration"
        id="duration"
        value={
          props.duration.duration === 0 ? (
            <span>Number</span>
          ) : (
            props.duration.duration
          )
        }
        onChange={props.change}
      />
      <span className="duration">hour</span>
    </>
  );
};

export default Duration;
