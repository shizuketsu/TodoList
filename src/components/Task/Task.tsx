import type { TaskItemProps } from "../../types/props";
import "./Task.scss";

export default function Task(props:TaskItemProps) {
    return (
        <li className="task">
            {props.text}
        </li>
    );
}