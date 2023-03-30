import React, { ReactElement, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import actions from "../../Redux/TodoActions/TodoActions";
import "../../Style/style.css";
import { TaskStatus } from "../../utils/constants";

const AddTodo: React.FC = (): ReactElement => {
  const editTask = useAppSelector((state) => state.todo.editTask);

  const [taskDescription, setTaskDescription] = useState<string>("");
  const isEdit = editTask; 

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isEdit) {
      setTaskDescription(editTask.text);
    } else {
      setTaskDescription("");
    }
  }, [editTask]);

  const handleOnClick = () => {
    if (isEdit) {
      dispatch(
        actions.updateTodoList({
          ...editTask,
          text: taskDescription,
        })
      );
    } else {
      dispatch(
        actions.addTodo({
          id: Math.floor(Math.random() * Date.now()),
          text: taskDescription,
          status: TaskStatus.PENDING,
        })
      );
    }
    setTaskDescription("");
  }

  return (
    <div className="add-todo">
      <input
        type="text"
        className="add-todo__input"
        onChange={(e) => setTaskDescription(e.target.value)}
        value={taskDescription}
      />
      <button
        className="add-todo__btn"
        onClick={handleOnClick}
        disabled={taskDescription.length === 0}
      >
        {/* Display Button Icon */}
        <i className={`fa fa-${isEdit ? "save" : "plus"}`} />
      </button>
    </div>
  );
};

export default AddTodo;
