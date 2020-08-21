import React from "react";
import "../style/starts.css";

const Starts = (props) => {
  const am = props.date.time < "12:00" ? true : false;
  const pm = props.date.time >= "12:00" ? true : false;

  return (
    <>
      <div className="contentStarts">
        <input
          type="date"
          name="date"
          className="date"
          min={props.date.date}
          value={props.date.date}
          onChange={props.changeDate}
        />
        <span className="starts">at</span>
        <input
          type="time"
          name="time"
          className="time"
          value={props.date.time}
          onChange={props.changeTime}
        />
        <div className="radioStarts">
          <input type="radio" name="when" checked={am} />
          <label>am</label>
          <input type="radio" name="when" checked={pm} />
          <label>pm</label>
        </div>
        {props.date.errors.id && (
          <div className="message">
            <span>{props.messages.date_incorrect}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Starts;
