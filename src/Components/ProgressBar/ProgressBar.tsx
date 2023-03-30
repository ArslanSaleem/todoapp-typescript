import React, { ReactElement } from "react";
import "../../Style/style.css";
import { TaskStatus } from "../../utils/constants";
import { useAppSelector } from "../../Redux/hooks";

const ProgressBar: React.FC = (): ReactElement => {
  const todos = useAppSelector((state) => state.todo.tasks);
  return (
    <ul className="progress-bar">
      {todos
        .filter((item) => item.status !== TaskStatus.DELETED)
        .map((task, index) => (
          <li
            key={index + 1}
            className={task.status === TaskStatus.COMPLETED ? "active" : ""}
          ></li>
        ))}
    </ul>
  );
};

export default ProgressBar;
