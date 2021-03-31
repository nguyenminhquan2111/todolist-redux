import React, { Component } from "react";
import ItemTask from "./item-task";
import { connect } from "react-redux";

class ListTask extends Component {
  renderListToDo = () => {
    let { listTask } = this.props;
    console.log(listTask);
    let listTodo = listTask.filter((item) => item.status === "todo");
    console.log(listTodo);

    return listTodo.map((item) => <ItemTask key={item.id} task={item} />);
  };
  renderListCompleted = () => {
    let { listTask } = this.props;
    let listCompleted = listTask.filter((item) => item.status === "completed");
    console.log(listCompleted);

    return listCompleted.map((item) => <ItemTask key={item.id} task={item} />);
  };
  render() {
    return (
      <>
        <ul className="todo" id="todo">
          {this.renderListToDo()}
        </ul>
        {/* Completed tasks */}
        <ul className="todo" id="completed">
          {this.renderListCompleted()}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listTask: state.taskReducer.listTask,
  };
};

export default connect(mapStateToProps, null)(ListTask);
