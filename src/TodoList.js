import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  addTodo(todo) {
    const newTodo = { todo, id: uuidv4(), completed: false };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  removeTodo(id) {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  }

  updateTodo(updatedTodo) {
    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return { ...todo, todo: updatedTodo.todo };
        }
        return todo;
      }),
    }));
  }

  toggleCompletion(id) {
    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    }));
  }

  render() {
    return (
      <div className="TodoList">
        <h1>
          Todo app! <span>An Animated Todo List Made With React.</span>
        </h1>
        <ul>
          {this.state.todos.map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              removeTodo={() => this.removeTodo(todo.id)}
              updateTodo={this.updateTodo}
              toggleCompletion={() => this.toggleCompletion(todo.id)}
            />
          ))}
        </ul>
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
