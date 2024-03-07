'use server'

import { revalidatePath } from "next/cache";
import { surrealAuthQuerry } from "../surreal";

 
export async function updateState(state:string, id:string) {
    const response = await surrealAuthQuerry(`
        UPDATE ${id} SET
            state = "${state}";
            `
    );
    revalidatePath('/private');
    return response;
}

export async function deleteTask(id:string) {
    const response = await surrealAuthQuerry(`
        DELETE ${id};
        `
    );
    revalidatePath('/private');
    return response;
}