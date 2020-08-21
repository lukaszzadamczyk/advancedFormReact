import React, { Component } from "react";
import "../style/eventName.css";
import AboutAside from "./AboutAside";
import Title from "./Title";
import Description from "./Description";
import Category from "./Category";
import Payment from "./Payment";
import Reward from "./Reward";

class EventName extends Component {
  state = {};
  render() {
    const {
      title,
      description,
      category_id,
      paid_event,
      event_fee,
      reward,
      errors,
    } = this.props.event;
    const { change } = this.props;
    return (
      <>
        <section className="yourEvent">
          <h2 className="yourEvent">About</h2>
          <div className="yourEvent">
            <AboutAside />
            <div>
              <Title
                errors={errors}
                change={change}
                title={title}
                messages={this.props.messages}
              />
              <Description
                errors={errors}
                messages={this.props.messages}
                change={change}
                text={description}
              />
              <Category category={category_id} />
              <Payment
                changeRadio={this.props.changeRadio}
                paid={paid_event}
                fee={event_fee}
                change={change}
              />
              <Reward reward={reward} change={change} />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default EventName;
