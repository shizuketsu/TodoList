import axios from "axios";
import { useState } from "react";
import type { TaskItemProps } from "../../types/props";
import params from "../../config.json";
import "./Task.scss";

export default function Task(props:TaskItemProps) {
    const [isClose, setIsClose] = useState<boolean>(false);
    
    const deleteTask = async () => {
        setIsClose(pr => !pr);
        await axios.post(`${params.server.api}/deleteTask`, {
            text: props.text
        });
    }

    return (
        <li className="task" style={{display: isClose ? 'none' : 'block'}} onClick={() => deleteTask()}>
            {props.text}
        </li>
    );
}