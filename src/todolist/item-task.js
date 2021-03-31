import React, { Component } from "react";
import { connect } from "react-redux";

class ItemTask extends Component {
  render() {
    const { task } = this.props;
    return (
      <li>
        <span className="liName">{task.textTask}</span>
        <span className="buttons">
          <button
            className="remove"
            onClick={() => this.props.handleDeleteTask(task)}
          >
            <i className="fas fa-trash-alt" />
          </button>
          <button
            className="complete"
            onClick={() => {
              this.props.handleUpdateTask(task);
            }}
          >
            <i className="far fa-check-circle" />
          </button>
        </span>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleDeleteTask: (task) => {
      const action = {
        type: "DELETE_TASK",
        payload: task,
      };
      dispatch(action);
    },
    handleUpdateTask: (task) => {
      const action = {
        type: "UPDATE_TASK",
        payload: task,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(ItemTask);
