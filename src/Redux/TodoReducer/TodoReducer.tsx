import { Reducer } from "redux";
import { FilterValues, TaskStatus } from "../../utils/constants";
import { ActionTypes } from "../TodoActions/types";

export type Task  = {
  id: number;
  text: string;
  status: TaskStatus
} 

interface TodoStateType {
  tasks: Array<Task>,
  todoFilter: FilterValues,
  editTask: Task | null
}

type ActionType = {
  type: string,
  payload: any
}

const defaultState: TodoStateType = {
  tasks: [],
  todoFilter: FilterValues.ALL,
  editTask: null
};

const todoReducer: Reducer<TodoStateType, ActionType> = (state: TodoStateType = defaultState, action: ActionType) => {

  switch (action.type) {
    case ActionTypes.addTodo:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case ActionTypes.updateTodoList:
      return {
        ...state,
        tasks: [...state.tasks].map((obj) =>
          action.payload.id === obj.id ? action.payload : obj
        ),
        editTask: null,
      };
    case ActionTypes.filterTodo: {
      return {
        ...state,
        todoFilter: action.payload,
      };
    }
    case ActionTypes.updateCheckStatus: {
      return {
        ...state,
        tasks: state.tasks?.map((task) => {
          if (task.id !== action.payload.id) {
            return task;
          }
          return {
            ...task,
            status: action.payload.status,
          };
        }),
      };
    }
    case ActionTypes.setUpdateData:
      return {
        ...state,
        editTask: action.payload,
      };

    default:
      return state;
  }
};

export default todoReducer;
