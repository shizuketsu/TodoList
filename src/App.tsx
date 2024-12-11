import Menu from "./components/Menu/Menu";
import Home from "./views/Home";
import { AddTaskProvider } from "./hooks/useAddTaskMenu";
import AddTaskMenu from "./components/AddTaskMenu/AddTaskMenu";

import "./globals.scss";

export default function App() {
    return (
        <AddTaskProvider>
            <Menu />
            <Home />
            <AddTaskMenu />
        </AddTaskProvider>
    );
}