import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Button } from "@nextui-org/react";

export default function Page(){

    async function signout(){
        'use server';
        cookies().delete('token');
        redirect('/');
    }
        
    return (
            <main>
                <p>private</p>
                <form action={signout}>
                    <Button type="submit" color="danger">Signout</Button>
                </form>
            </main>
        )
}