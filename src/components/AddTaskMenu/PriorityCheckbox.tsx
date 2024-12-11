import type { PriorityCheckboxProps } from "../../types/props";

export default function PriorityCheckbox(props:PriorityCheckboxProps) {
    return (
        <label htmlFor={props.text}>
            <input type="checkbox" checked={props.isActive} id={props.text} onChange={() => props.onChange(props.isActive ? null : props.text)} />
            <span>{props.text}</span>
        </label>
    );
}