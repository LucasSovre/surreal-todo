"use client"

import { updateState,deleteTask } from "@/lib/actions/task";
import { Button, Card, CardBody, CardFooter, CardHeader, Chip } from "@nextui-org/react";
import { useState } from "react";

export default function Task({task}:{task: any}){

    const [state, setState] = useState(task?.state);

    function getColor(state:string){
        switch(state){
            case "pending":
                return "secondary";
            case "progressing":
                return "primary";
            case "finished":
                return "success";
            default:
                return "default";
        }
    }

    const updateTaskState = updateState.bind(null, state, task?.id);
    const deleteTaskAction = deleteTask.bind(null, task?.id);

    return(
        <Card>
            <CardHeader>
                <h2 className="text-2xl font-medium">{task?.name}</h2>
            </CardHeader>
            <CardBody className="gap-2">
                <p className="text-justify">
                    {task?.description}
                </p>
                <Chip color={
                    getColor(task?.state)
                } className="text-white">{task?.state}</Chip>
            </CardBody>
            <CardFooter className="gap-2">
                <select name="status" className="bg-gray-100 px-2 py-2 rounded-xl text-sm" defaultValue={task?.state} onChange={(e)=>setState(e.target?.value)} >
                    <option value="pending">pending</option>
                    <option value="progressing">progressing</option>
                    <option value="finished">finished</option>
                </select>
                <Button size="sm" color="default" onClick={()=>updateTaskState()}>Save</Button>
                <Button size="sm" color="default" onClick={()=>deleteTaskAction()} >Delete</Button>
            </CardFooter>
        </Card>
        )
}