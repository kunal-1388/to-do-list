import React, { Component } from "react";
import "./Todo.css";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.info.task,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCompletion = this.handleCompletion.bind(this);
  }

  handleEdit(evt) {
    evt.preventDefault();
    this.setState((state) => ({
      isEditing: !state.isEditing,
    }));
  }

  handleSave(evt) {
    evt.preventDefault();
    this.props.Update(this.props.info.id, this.state.task);
    this.setState({
      isEditing: false,
    });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleRemove() {
    this.props.remove(this.props.info.id);
  }
  handleCompletion() {
    this.props.toggleTodo(this.props.info.id);
  }
  render() {
    let result;
    if (!this.state.isEditing) {
      result = (
        <div className="Todo">
          <li
            className={
              this.props.info.completed ? "Todo-task completed" : "Todo-task"
            }
            onClick={this.handleCompletion}
          >
            {this.props.info.task}
          </li>
          <div className="Todo-button">
            <button onClick={this.handleEdit}>
              <i class="fas fa-pen" />
            </button>
            <button onClick={this.handleRemove}>
              <i class="fas fa-trash" />
            </button>
          </div>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form">
            <input
              type="text"
              name="task"
              onChange={this.handleChange}
              value={this.state.task}
            />
            <button onClick={this.handleSave}>Save</button>
          </form>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
