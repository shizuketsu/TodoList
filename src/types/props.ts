import { ReactElement } from "react"

export interface MenuLinkProps {
    text:string,
    icon:ReactElement,
    onClick:() => void,
}

export interface PriorityCheckboxProps {
    text:string,
    isActive:boolean,
    onChange:(value:string|null) => void
}

export interface TaskListProps {
    prior:string,
    children:ReactElement
}

export interface TaskItemProps {
    text:string
}