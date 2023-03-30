import React, {ReactElement} from "react";
import TodoFilter from "./TodoFilter/TodoFilter";
import "../../Style/style.css";
import { FilterValues } from "../../utils/constants";
import { FilterDataType } from "./types";

const FilterList: Array<FilterDataType> = [{
  value: FilterValues.ALL, 
  icon: "list-ul",
  label: "All"

}, {
  value: FilterValues.PENDING, 
  icon: "edit",
  label: "Pending"
}, {
  value: FilterValues.COMPLETED, 
  icon: "check",
  label: "Completed"
}, {
  value: FilterValues.DELETED, 
  icon: "trash",
  label: "Deleted"
}
]
const TodoFilters: React.FC = (): ReactElement => (

  <div className="filters">
    {
      FilterList.map((item: FilterDataType, index)  => (<TodoFilter key={`filter-${index}`} data={item} />))
    }
  </div>
);

export default TodoFilters;
