import React, { useContext, createContext, useState } from "react";
import type { AddTaskMenuType } from "../types/hooks";

const AddTaskContext = createContext<AddTaskMenuType|null>(null);

function AddTaskProvider({ children }:{ children:React.ReactNode }):React.ReactElement {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [taskName, setTaskName] = useState<string>('');
    
    const toggleIsOpen = (newTaskName:string) => {
        setTaskName(newTaskName);
        setIsOpen(pr => !pr);
    }
    
    return (
        <AddTaskContext.Provider value={{ isOpen, toggleIsOpen, taskName, setTaskName }}>
            {children}
        </AddTaskContext.Provider>
    );
}

function useAddTaskMenuContext() {
    const ctx = useContext(AddTaskContext);
    if (ctx === null) throw new Error('useAddTaskMenuContext must be used within a ThemeProvider');
    return ctx;
}

export { useAddTaskMenuContext, AddTaskProvider };