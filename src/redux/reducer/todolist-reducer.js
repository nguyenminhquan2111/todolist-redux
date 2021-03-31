import data from "../../todolist/data.json";

const initialState = {
  listTask: data,
};

const taskReducer = (state = initialState, { type, payload }) => {
  console.log(type, payload);
  switch (type) {
    case "ADD_TASK": {
      let newTask = {};
      if (payload.textTask !== "") {
        newTask = { ...payload, id: `${Math.floor(Math.random() * 100)}` };
      } else {
        alert("Không được để task bỏ trống !!!");
      }
      let listTask = [...state.listTask, newTask];

      state.listTask = listTask;
      return { ...state };
    }

    case "DELETE_TASK": {
      let listTask = [...state.listTask];
      const index = state.listTask.findIndex((item) => item.id === payload.id);

      if (index !== -1) {
        listTask.splice(index, 1);
      }

      state.listTask = listTask;
      return { ...state };
    }

    case "UPDATE_TASK": {
      let listTask = [...state.listTask];
      const index = state.listTask.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        payload.status = "completed";
      }
      state.listTask = listTask;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default taskReducer;
