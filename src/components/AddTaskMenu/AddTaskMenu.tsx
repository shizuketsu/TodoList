import axios from "axios";
import { useState } from "react";
import { useAddTaskMenuContext } from "../../hooks/useAddTaskMenu";
import PriorityCheckbox from "./PriorityCheckbox";
import params from "../../config.json";
import "./AddTaskMenu.scss";

export default function AddTaskMenu() {
    const { isOpen, toggleIsOpen, taskName, setTaskName } = useAddTaskMenuContext();
    const [ selectedPrior, setSelectedPrior ] = useState<string>('Primary');
    
    const addTask = async () => {
        try {
            await axios.post(`${params.server.api}/addTask`, JSON.stringify({
                name: taskName,
                prior: selectedPrior
            }), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            toggleIsOpen('');
        } catch(err) {
            console.log(err);
        }
    }

    const changeSelectedPrior = (prior:string) => setSelectedPrior(prior);

    return (
        <dialog className="add-task-window" open={isOpen}>
            <div className="add-task-menu">
                <h1>Add task</h1>
                <input type="text" className="task-menu-text" placeholder="Your important task..." value={taskName as string} onChange={(e) => setTaskName(e.target.value)} />
                <h3>Description</h3>
                <div className="add-task-prior">
                    <PriorityCheckbox text="Primary" isActive={selectedPrior === 'Primary'} onChange={() => changeSelectedPrior('Primary')} />
                    <PriorityCheckbox text="Secondary" isActive={selectedPrior === 'Secondary'} onChange={() => changeSelectedPrior('Secondary')} />
                    <PriorityCheckbox text="Tertiary" isActive={selectedPrior === 'Tertiary'} onChange={() => changeSelectedPrior('Tertiary')} />
                </div>
                <div className="add-task-btn">
                    <button onClick={() => toggleIsOpen('')}>Close</button>
                    <button onClick={() => addTask()}>Add task</button>
                </div>
            </div>
        </dialog>
    );
}