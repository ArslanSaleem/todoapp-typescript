import React, { useEffect, useState } from "react";
import Todo from "../TodoCard/TodoCard";
import { useAppSelector } from "../../Redux/hooks";
import { Task } from "../../Redux/TodoReducer/TodoReducer";
import { FilterValues, TaskStatus } from "../../utils/constants";

const TodoList: React.FC = () => {
  const {tasks, todoFilter}  = useAppSelector((state) => state.todo);
  const [filterData, setFilterData] = useState<Array<Task>>([]);

  useEffect(() => {
    const filteredTasks = tasks?.filter((item: Task) => {
      return (todoFilter ===FilterValues.ALL || 
        (todoFilter ===FilterValues.PENDING && item.status === TaskStatus.PENDING) ||
        (todoFilter ===FilterValues.COMPLETED && item.status === TaskStatus.COMPLETED) || 
        (todoFilter ===FilterValues.DELETED && item.status === TaskStatus.DELETED) 
        )
    })
    setFilterData(filteredTasks)
  }, [todoFilter, tasks])

  return (
    <div className="todo-list-wrapper">
      {
        filterData.map((todo) => (
          <Todo key={`task-${todo.id}`} todo={todo} />
        ))}
    </div>
  );
};

export default TodoList;
