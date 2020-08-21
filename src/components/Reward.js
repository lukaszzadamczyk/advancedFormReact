import React from "react";
import "../style/reward.css";

const Reward = (props) => {
  return (
    <>
      <input
        placeholder="Number"
        type="number"
        name="reward"
        id="reward"
        value={props.reward === 0 ? <span>Number</span> : props.reward}
        onChange={props.change}
      />
      <label htmlFor="reward"> reward points for attendance </label>
    </>
  );
};

export default Reward;
