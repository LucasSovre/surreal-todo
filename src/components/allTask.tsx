import { surrealAuthQuerry } from "@/lib/surreal";
import Task from "./task";

export default async function AllTask(){

    const tasks = await surrealAuthQuerry(`
        SELECT * OMIT created_by from task ORDER BY updated_at DESC;
    `);

    return(
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {
            tasks[0].result.map((task:any) => {
                return(
                    <Task key={task.id} task={task} />
                    )
                })
            }
        </div>
        )
}