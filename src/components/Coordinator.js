import React from "react";
import "../style/coordinator.css";
import CoordinatorAside from "./CoordinatorAside";
import Responsible from "./Responsible";
import Email from "./Email";

const Coordinator = (props) => {
  return (
    <>
      <section className="coordinator">
        <h2 className="coordinator">Coordinator</h2>
        <div className="coordinator">
          <CoordinatorAside />
          <div>
            <Responsible responsible={props.responsible} users={props.event} />
            <Email email={props.event} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Coordinator;
