import React from "react";
import "../../Style/style.css";
import actions from "../../Redux/TodoActions/TodoActions";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { Task } from "../../Redux/TodoReducer/TodoReducer";
import { TaskStatus } from "../../utils/constants";
import CheckBox from "../Common/CheckBox";

interface IProps {
  todo: Task
}

const Todo: React.FC<IProps> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const updateData = useAppSelector((state) => state.todo.editTask);

  return (
    <li
      key={`${todo.id}`}
      className={todo.status === TaskStatus.COMPLETED ? "list_item_1 list_active" : "list_item_1"}
    >
      <CheckBox 
        id={todo.id}
        checked={todo.status === TaskStatus.COMPLETED}
        label={todo.text}
        onClick={() => {
          if (todo.status !== TaskStatus.DELETED) {
            dispatch(
              actions.updateCheckStatus({
                id: todo.id,
                status: todo.status === TaskStatus.COMPLETED ? TaskStatus.PENDING : TaskStatus.COMPLETED,
              })
            );
          }
        }}
      />
     
      {todo.status !== TaskStatus.DELETED ? (
        <div className="flex">
          <button
            className="flex list-btn del-btn"
            onClick={() =>
              dispatch(
                actions.updateCheckStatus({ id: todo.id, status: TaskStatus.DELETED })
              )
            }
          >
            <i className={`fa fa-trash`} style={{ fontSize: "150%" }}></i>
            <div className="p-5 hide-filter-name">Deleted</div>
          </button>
          <button
            disabled={!!updateData}
            className="flex list-btn p-5 edit-btn"
            onClick={() => {
              dispatch(actions.setUpdateData(todo));
            }}
          >
            <i className={`fa fa-edit`} style={{ fontSize: "150%" }}></i>
            <div className="p-5 hide-filter-name">Update</div>
          </button>
        </div>
      ): <div>
        Deleted
      </div>
      }
    </li>
  );
};

export default Todo;
