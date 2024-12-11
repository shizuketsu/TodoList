import type { TaskListProps } from "../../types/props";
import "./TaskList.scss";

export default function TaskList(props:TaskListProps) {
    return (
        <ul className="task-list">
            <h1>{props.prior}</h1>
            {props.children}
        </ul>
    );
}