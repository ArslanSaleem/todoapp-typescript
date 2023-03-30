import { Task } from "../TodoReducer/TodoReducer";
import { ActionTypes } from "./types";


const TodoActions = {
  addTodo: (data: Task) => {
    return {
      type: ActionTypes.addTodo,
      payload: data,
    };
  },
  updateTodoList: (data: Task) => {
    return {
      type: ActionTypes.updateTodoList,
      payload: data,
    };
  },
  filterTodoList: (filter: any) => {
    return {
      type: ActionTypes.filterTodo,
      payload: filter,
    };
  },
  updateCheckStatus: (data: any) => {
    return {
      type: ActionTypes.updateCheckStatus,
      payload: data,
    };
  },
  setUpdateData: (data: any) => {
    return {
      type: ActionTypes.setUpdateData,
      payload: data,
    };
  },
};

export default TodoActions;
