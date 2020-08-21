import React from "react";
import "../style/when.css";
import WhenAside from "./WhenAside";
import Starts from "./Starts";
import Duration from "./Duration";

const When = (props) => {
  return (
    <>
      <section className="when">
        <h2 className="when">When</h2>
        <div className="when">
          <WhenAside />
          <div className="contentWhen">
            <Starts
              changeTime={props.changeTime}
              changeDate={props.changeDate}
              date={props.date}
              messages={props.messages}
            />
            <Duration change={props.change} duration={props.date} />
          </div>
        </div>
      </section>
    </>
  );
};

export default When;
