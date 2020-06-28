import React, { Component } from "react";
import "./NewTodoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(evt) {
    this.setState({
      todo: evt.target.value,
    });
  }

  onSubmit(evt) {
    evt.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: "",
    });
  }

  render() {
    return (
      <div className="NewTodoForm">
        <form onSubmit={this.onSubmit}>
          <label htmlFor="todo">New Todo</label>
          <br />
          <input
            type="text"
            name="todo"
            id="todo"
            value={this.state.todo}
            onChange={this.onChange}
            placeholder="New Todo"
          />
          <button>ADD TODO</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
