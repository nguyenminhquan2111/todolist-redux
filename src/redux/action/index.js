import * as ActionType from "../constant";

export const actAddTask = (newTask) => {
  return {
    type: ActionType.ADD_TASK,
    payload: newTask,
  };
};

export const actDeleteTask = (task) => {
  return {
    type: ActionType.DELETE_TASK,
    payload: task,
  };
};

export const actUpdateTask = (task) => {
  return {
    type: ActionType.UPDATE_TASK,
    payload: task,
  };
};
