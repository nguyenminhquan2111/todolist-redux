import React, { Component } from "react";
import { connect } from "react-redux";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      textTask: "",
      status: "todo",
    };
  }
  handleAddTask = (event) => {
    event.preventDefault();
    this.props.addTask(this.state);
  };

  render() {
    return (
      <>
        <input
          id="newTask"
          type="text"
          placeholder="Enter an activity..."
          onChange={(event) => {
            this.setState({
              textTask: event.target.value,
            });
          }}
        />
        <button id="addItem" onClick={this.handleAddTask}>
          <i className="fa fa-plus" />
        </button>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (newTask) => {
      const action = {
        type: "ADD_TASK",
        payload: newTask,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(AddTask);
