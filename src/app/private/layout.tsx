import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Layout({children}: Readonly<{children: React.ReactNode;}>){

    async function signout(){
        'use server';
        cookies().delete('token');
        redirect('/');
    }

    return(
        <main className="flex flex-col w-screen h-screen">
                <nav className="flex bg-slate-200 py-2 px-10">
                    <form action={signout} className="ml-auto">
                        <button type="submit" color="danger">Signout</button>
                    </form>
                </nav>
                <section className="p-5 w-full h-full">
                    {children}
                </section>
        </main>
        )

}