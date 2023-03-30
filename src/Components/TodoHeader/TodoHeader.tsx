import React, { ReactElement } from "react";
import { useAppSelector } from "../../Redux/hooks";
import "../../Style/style.css";
import { TaskStatus } from "../../utils/constants";

interface IProps {
  collapse: boolean;
  onCollapse: () => void
}

const TodoHeader: React.FC<IProps>  = ({ collapse, onCollapse }): ReactElement => {
  const todos = useAppSelector((state) => state.todo.tasks);

  return (
    <div className="top">
      <h3>TODO LIST</h3>
      <div className="checked_tick" onClick={onCollapse}>
        {" "}
        <i
          id="checked_toggle"
          className={
            todos.filter((item) => item.status === TaskStatus.COMPLETED).length ===
            todos.filter((item) => item.status !== TaskStatus.DELETED).length
              ? "fa fa-check"
              : "fa fa-check d-none"
          }
        ></i>{" "}
        <span>
          <i className={collapse ? "fa fa-angle-up" : "fa fa-angle-down"}></i>
        </span>{" "}
      </div>
    </div>
  );
};

export default TodoHeader;
