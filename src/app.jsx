import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { addReminder, deleteReminder, clearReminder } from "./actionsCreatiors";
import { connect } from "react-redux";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LogoImg from "./reminders-icon.png";
import "./app.css";

class App extends Component {
  state = {
    whatToDo: "",
    timeToDo: "",
  };

  renderReminder = () => {
    let { reminders } = this.props;
    return reminders.map((reminder, index) => {
      return (
        <Container
          className="reminder-note text-dark text-left p-2 my-3 rounded overflow-hidden"
          key={index}
        >
          <Row>
            <Col xs={10} md={10} className="info float-left">
              <h4 className="what-to-do">{reminder.whatToDo}</h4>
              <p className="time-to-do">
                {moment(new Date(reminder.timeToDo)).fromNow()}
              </p>
            </Col>
            <Col xs={2} md={2} className="delete float-left text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                onClick={() => {
                  this.props.deleteReminder(index);
                }}
                width="60"
                height="70"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </Col>
          </Row>
        </Container>
      );
    });
  };

  render() {
    return (
      <section className="reminder rounded px-3 py-3 text-center text-white">
        <img src={LogoImg} alt="logo-reminder" />
        <h2>What Shoud You Do?</h2>
        <Form.Group controlId="forTitle">
          <Form.Control
            type="text"
            placeholder="Type What are you planning to do?"
            onChange={(e) => {
              this.setState({
                whatToDo: e.target.value,
              });
            }}
            value={this.state.whatToDo}
          />
        </Form.Group>
        <Form.Group controlId="fordate">
          <DatePicker
            className="for-time"
            placeholderText="Enter Date"
            selected={this.state.timeToDo}
            onChange={(timeToDo) => {
              this.setState({
                timeToDo: timeToDo,
              });
            }}
            showTimeSelect
            timeFormat="p"
            dateFormat="Pp"
            value={this.state.timeToDo}
          />
          {/* <Form.Control
            type="datetime-local"
            onChange={(e) => {
              this.setState({
                timeToDo: e.target.value,
              });
            }}
            value={this.state.timeToDo}
          /> */}
        </Form.Group>

        <Button
          className="my-2"
          variant="primary"
          size="lg"
          block
          onClick={() => {
            this.props.addReminder(this.state.whatToDo, this.state.timeToDo);
            this.setState({
              whatToDo: "",
              timeToDo: "",
            });
          }}
        >
          Add Reminder
        </Button>
        <div className="reminders">{this.renderReminder()}</div>
        <Button
          variant="danger"
          size="lg"
          block
          onClick={() => {
            this.props.clearReminder();
          }}
        >
          Clear Reminders
        </Button>
      </section>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     addReminder: () => dispatch(addReminder()),
//     deleteReminder: () => dispatch(deleteReminder()),
//   };
// }

// function mapStateToProps(state) {
//   return {
//     reminders: state,
//   };
// }

export default connect(
  (state) => {
    return {
      reminders: state,
    };
  },
  { addReminder, deleteReminder, clearReminder }
)(App);
