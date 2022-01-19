import React, { Component } from "react";
import "./NewTodoForm.css";
class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    evt.preventDefault();
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      task: "",
    });
  }

  render() {
    return (
      <div>
        <form className="NewTodoForm" onSubmit={this.handleSubmit}>
          <label htmlFor="task">Add Todo</label>
          <input
            type="text"
            id="task"
            name="task"
            onChange={this.handleChange}
            value={this.state.task}
            placeholder="New Todo"
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
