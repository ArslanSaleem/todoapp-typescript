import React, { useState, ReactElement } from "react";
import AddTodo from "../Components/AddTodo/AddTodo";
import TodoList from "../Components/TodoList/TodoList";
import Filters from "../Components/TodoFilters/TodoFilters";
import TodoHeader from "../Components/TodoHeader/TodoHeader";
import "../Style/style.css";
import ProgressBar from "../Components/ProgressBar/ProgressBar";

const TodoApp: React.FC = (): ReactElement => {
  const [collapse, setCollapse] = useState<boolean>(true);

  return (
    <div className="container">
      <div className={collapse ? "card heighten" : "card"}>
        <TodoHeader collapse={collapse} onCollapse={() => setCollapse(!collapse)} />
        {
          collapse && <>
            <ProgressBar />
            <AddTodo />
            <Filters />
            <TodoList />
          </>
        }
      </div>
    </div>
  );
};

export default TodoApp;
