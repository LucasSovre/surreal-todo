import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Link from "next/link";
import { Button } from "@nextui-org/react";

export default function Page(){

    async function signout(){
        'use server';
        cookies().delete('token');
        redirect('/');
    }
        
    return (
            <>
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold mb-5">My tasks</h1>
                    <Link href="/private/newtask" color="primary">
                        <Button color="primary">New task</Button>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                </div>
            </>
                
        )
}