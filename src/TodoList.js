import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.remove = this.remove.bind(this);
    this.Update = this.Update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  addTodo(todo) {
    const newTodo = { ...todo, id: uuidv4(), completed: false };
    this.setState((state) => ({
      todos: [...state.todos, newTodo],
    }));
  }
  remove(id) {
    this.setState((state) => ({
      todos: state.todos.filter((ele) => ele.id !== id),
    }));
  }

  Update(id, updatedTodo) {
    let updatedTodos = [];
    for (let t of this.state.todos) {
      if (t.id === id) {
        updatedTodos.push({ ...t, task: updatedTodo });
      } else {
        updatedTodos.push(t);
      }
    }

    this.setState({
      todos: updatedTodos,
    });
  }

  toggleCompletion(id) {
    let updatedTodos = [];
    for (let t of this.state.todos) {
      if (t.id === id) {
        updatedTodos.push({ ...t, completed: !t.completed });
      } else {
        updatedTodos.push(t);
      }
    }
    this.setState({
      todos: updatedTodos,
    });
  }

  render() {
    return (
      <div className="TodoList">
        <h1>
          Todo List!<span>A Simple React Todo List App</span>
        </h1>

        <ul>
          {this.state.todos.map((todo) => (
            <Todo
              info={todo}
              key={todo.id}
              remove={this.remove}
              Update={this.Update}
              toggleTodo={this.toggleCompletion}
            />
          ))}
        </ul>
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
