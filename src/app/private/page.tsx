import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Suspense } from "react";
import AllTask from "@/components/allTask";

export default function Page(){
        
    return (
            <>
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold mb-5">My tasks</h1>
                    <Link href="/private/newtask" color="primary">
                        <Button color="primary">New task</Button>
                    </Link>
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                    <AllTask />
                </Suspense>
            </>
                
        )
}