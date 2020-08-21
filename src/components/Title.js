import React from "react";
import "../style/title.css";

const Title = (props) => {
  return (
    <>
      <input
        type="text"
        name="title"
        placeholder="Make it short and clear"
        className="title"
        value={props.title}
        onChange={props.change}
      />
      {props.errors.title && (
        <div className="message">
          <span>{props.messages.title_incorrect}</span>
        </div>
      )}
    </>
  );
};

export default Title;
