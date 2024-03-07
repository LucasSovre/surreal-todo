import { surrealAuthQuerry } from "@/lib/surreal";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { redirect } from "next/navigation";

export default function Page(){

    async function createTask(formData : FormData) {
        'use server';
        const name = formData.get('name') as string;
        const description = formData.get('description') as string;
        const status = formData.get('status') as string;
        const response = await surrealAuthQuerry(`
            CREATE task CONTENT {
                name : "${name}",
                description : "${description}",
                state : "${status}",
            };
        `);
        if(response[0].status === "OK"){
            redirect('/private');
        }
      }

    const states:Array<string> = ["pending","progressing","finished"]

    return (
        <div className="flex w-full h-full justify-center items-center">
            <form action={createTask} className="flex flex-col w-2/3 gap-10">
                <h1 className="text-2xl font-bold">Create a new task</h1>
                <Input label="Name" placeholder="Name" name="name" />
                <Input label="Description" placeholder="Description" name="description" />
                <select name="status" className="bg-gray-100 px-2 py-4 rounded-xl" defaultValue="pending" >
                    {states.map((state, index) => (
                        <option key={index} value={state}>{state}</option>
                    ))}
                </select>
                <Button color="primary" type="submit">Create</Button>
            </form>
        </div>
    )
}