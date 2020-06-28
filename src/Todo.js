import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { editing: false, todo: this.props.todo.todo };
    this.onEdit = this.onEdit.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(evt) {
    this.setState({
      todo: evt.target.value,
    });
  }

  onEdit() {
    this.setState((state) => ({
      editing: !state.editing,
    }));
  }

  onSave(evt) {
    evt.preventDefault();
    this.props.updateTodo({ todo: this.state.todo, id: this.props.todo.id });
    this.setState((state) => ({
      editing: !state.editing,
    }));
  }

  render() {
    return (
      <div>
        {this.state.editing ? (
          <div className="Todo-edit-form">
            <form onSubmit={this.onSave}>
              <input
                type="text"
                name="todo"
                value={this.state.todo}
                onChange={this.onChange}
              ></input>
              <button>Save</button>
            </form>
          </div>
        ) : (
          <div className="Todo">
            <li
              onClick={this.props.toggleCompletion}
              className={this.props.todo.completed ? "completed " : ""}
            >
              {this.props.todo.todo}
            </li>

            <div className="Todo-buttons">
              <button onClick={this.onEdit} className="fas fa-edit"></button>
              <button
                onClick={this.props.removeTodo}
                className="fas fa-trash"
              ></button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Todo;
