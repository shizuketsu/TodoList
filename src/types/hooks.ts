export interface AddTaskMenuType {
    isOpen:boolean,
    taskName:string,
    toggleIsOpen:(newTaskName:string) => void,
    setTaskName:(newTaskName:string) => void
}