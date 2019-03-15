import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calanderFocus: false,
      error: ""
    };
  }

  onDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };
  onNoteChange = e => {
    this.setState({ note: e.target.value });
  };
  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
      this.setState({ amount });
    }
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState({ createdAt });
    }
  };
  onDateFocusChange = ({ focused }) => {
    this.setState({ calanderFocus: focused });
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState({
        error: "Please enter description and amount"
      });
    } else {
      this.setState({ error: "" });
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  onRemove = e => {
    e.preventDefault();
    this.setState({ error: "" });
    this.props.onRemove();
  };
  componentDidMount() {
    this.description.focus();
  }
  render() {
    return (
      <div>
        <div>{this.state.error && <p>this.state.error</p>}</div>
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              type="text"
              ref={input => {
                this.description = input;
              }}
              placeholder="Description"
              value={this.state.description}
              onChange={this.onDescriptionChange}
              required
            />
          </div>
          <div>
            <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calanderFocus}
              onFocusChange={this.onDateFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Amount"
              value={this.state.amount}
              onChange={this.onAmountChange}
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Note(Optional)"
              value={this.state.note}
              onChange={this.onNoteChange}
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
          <div>
            <button onClick={this.onRemove}>Remove</button>
          </div>
        </form>
      </div>
    );
  }
}
