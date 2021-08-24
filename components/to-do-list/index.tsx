import React from 'react';
import {IToDo} from "../../lib/interfaces/to-do.interface";
import {ToDoItem} from "../to-do-item";

export const ToDoList:React.FC<{todos:IToDo[]}> = React.memo(
    ({todos}) => {
        return (
            <>
                {todos.map((todo:IToDo, index:number)=>(
                    <ToDoItem {...todo} key={index}/>
                ))}
            </>
        );
    }

)