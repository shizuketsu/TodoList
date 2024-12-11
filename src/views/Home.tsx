import axios from "axios";
import { useEffect, useState } from "react";
import TaskList from "../components/TasksList/TaskList";
import Task from "../components/Task/Task";
import params from "../config.json";
import "./Home.scss";

export default function Home() {
    const [tasks, setTasks] = useState<any>();

    useEffect(() => {
        try {
            const req = async () => {
                const res = await axios.get(`${params.server.api}/getTasks`);
                setTasks(res.data);
            }

            req();
        } catch(err) {
            console.log(err);
        }
    }, []);
    
    return (
        <main className="home-content container">
            <div className="container">
                {
                    tasks?.primary.length > 0 ? (
                        <TaskList prior="Primary">
                            {
                                tasks.primary.map((primaryTask:any, index:number) => {
                                    return <Task key={index+'task'} text={primaryTask.text} />
                                })
                            }
                        </TaskList>
                    ) : ''
                }
                {
                    tasks?.secondary.length > 0 ? (
                        <TaskList prior="Secondary">
                            {
                                tasks.secondary.map((secondaryTask:any, index:number) => {
                                    return <Task key={index+'task2'} text={secondaryTask.text} />
                                })
                            }
                        </TaskList>
                    ) : ''
                }
                {
                    tasks?.tertiary.length > 0 ? (
                        <TaskList prior="Tertiary">
                            {
                                tasks.tertiary.map((tertiaryTask:any, index:number) => {
                                    return <Task key={index+'task3'} text={tertiaryTask.text} />
                                })
                            }
                        </TaskList>
                    ) : ''
                }
            </div>
        </main>
    );
}