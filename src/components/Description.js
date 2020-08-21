import React from "react";
import "../style/description.css";

const Description = (props) => {
  return (
    <>
      <textarea
        value={props.text}
        onChange={props.change}
        name="description"
        placeholder="Write about your event, be creative"
      ></textarea>
      {props.errors.description && (
        <div className="messageDescription">
          <span>{props.messages.description_incorrect}</span>
        </div>
      )}

      <div className="characters">
        <p>Max length 140 characters</p>
        <p>{props.text.length}/140</p>
      </div>
    </>
  );
};

export default Description;
