import React, { Component } from "react";
// import { useHistory } from "react-router-dom";
import EventName from "./EventName";
import Coordinator from "./Coordinator";
import When from "./When";
import Button from "./Button";
const categoriesAPI = "data/categories.json";
const empolyesAPI = "data/employes.json";

const date = new Date().toISOString().slice(0, 10);
const time = new Date().toISOString().slice(11, 16);
class Form extends Component {
  state = {
    title: "",
    description: "",
    category_id: [],
    paid_event: false,
    event_fee: "",
    reward: "",
    date: date,
    time: time,
    duration: "",
    coordinator: {
      id: [],
      email: [],
    },
    errors: {
      title: false,
      description: false,
      id: false,
      date: false,
    },
  };
  messages = {
    title_incorrect: "Title cannot be empty",
    description_incorrect: "Write something about",
    id_incorrect: "Choose a person",
    date_incorrect: "Select date",
  };
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (value.length <= 140) {
      this.setState({
        [name]: value,
      });
    }
  };
  handleRadio = () => {
    this.setState({
      paid_event: !this.state.paid_event,
    });
  };

  handleDurationChange = (e) => {
    if (e.target.value >= 0 && e.target.value <= 10) {
      this.setState({
        duration: e.target.value,
      });
    }
  };
  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };
  handleTime = (e) => {
    this.setState({
      time: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const {
      title,
      description,
      paid_event,
      event_fee,
      reward,
      duration,
    } = this.state;
    e.preventDefault();

    const validation = this.formValidation();

    if (validation.correct) {
      console.log(
        title,
        description,
        paid_event,
        event_fee,
        reward,
        duration,
        date,
        time
      );
      this.setState(() => ({
        title: "",
        description: "",
        paid_event: false,
        event_fee: "",
        reward: "",
        date: date,
        time: time,
        duration: "",
        errors: {
          title: false,
          description: false,
          id: false,
          date: false,
        },
      }));
    } else {
      this.setState({
        errors: {
          title: !validation.title,
          description: !validation.description,
          id: !validation.id,
          date: !validation.date,
        },
      });
    }
  };

  formValidation = () => {
    let title = false;
    let description = false;
    let id = false;
    let date = false;
    let correct = false;

    if (this.state.title !== "") {
      title = true;
    }
    if (this.state.description !== "") {
      description = true;
    }
    if (this.state.date !== null) {
      id = true;
    }
    if (this.state.coordinator.id !== "") {
      date = true;
    }
    if (title && description && id && date) {
      correct = true;
    }

    return {
      title,
      description,
      id,
      date,
      correct,
    };
  };

  componentDidMount() {
    fetch(categoriesAPI)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          category_id: response,
        });
      });
    fetch(empolyesAPI)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          coordinator: {
            id: response,
            email: "",
          },
        });
      });
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} noValidate>
          <EventName
            changeRadio={this.handleRadio}
            change={this.handleChange}
            messages={this.messages}
            event={this.state}
          />
          <Coordinator event={this.state} responsible={this.messages} />
          <When
            messages={this.messages}
            changeTime={this.handleTime}
            changeDate={this.handleDate}
            change={this.handleDurationChange}
            date={this.state}
          />

          <Button />
        </form>
      </>
    );
  }
}

export default Form;
