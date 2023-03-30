import React, { ReactElement } from "react";
import './style.css';

interface IProps {
    checked: boolean;
    label: string;
    onClick: () => void;
    id: number;
}
 
const CheckBox : React.FC<IProps> = ({checked, label, onClick, id}): ReactElement => {
    return ( 
        <div className="task-list">
            <span
                id={`check-${id}`}
                className={checked ? "list_checked" : ""}
                onClick={onClick}
            >
                <i className="fa fa-check"></i>
            </span>
            { !checked?  <div>{label} </div>: <del>{label}</del> }
       </div>
     );
}
 
export default  CheckBox;