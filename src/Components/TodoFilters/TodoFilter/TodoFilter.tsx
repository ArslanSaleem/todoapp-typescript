import React, { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks";
import actions from "../../../Redux/TodoActions/TodoActions";
import "../../../Style/style.css";
import { FilterDataType } from "../types";

interface IProps {
  data: FilterDataType
}

const TodoFilter: React.FC<IProps> = ({ data }): ReactElement => {

  const {label, value, icon } = data;
  const dispatch = useAppDispatch();
  const todoFilter = useAppSelector((state) => state.todo.todoFilter);

  return (
    <div
      className={`filter__link ${
        todoFilter === value ? "active-filter-" + label : ""
      }`}
    
      onClick={(e) => {
        e.preventDefault();
        dispatch(actions.filterTodoList(data.value));
      }}
    >
      <i className={`fa fa-${icon}`}></i>
      <span className={"hide-filter-name filter-name filter_name-" + icon}>
        {label}
      </span>
    </div>
  );
};

export default TodoFilter;
