import { surrealSignup } from "@/lib/surreal";
import {Input, Button} from "@nextui-org/react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Page() {

  async function signup(formData : FormData) {
    'use server';
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const response = await surrealSignup(email, password, firstName, lastName);
    if(response.status === 200){
      //go to /private page
      redirect('/private');
    }else{
      throw new Error('Signup failed');
    }
  }


  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen gap-10">
        <div>
          <h1 className='text-4xl font-bold'>Todo app</h1>
          <h2>signup !</h2>
        </div>
        <form action={signup} className="flex flex-col gap-5">
          <Input name="email" type="email" label="Email" placeholder="Enter your email" required />
          <Input name="password" type="password" label="Password" placeholder="Enter your password" required />
          <Input name="firstName" type="text" label="First name" placeholder="Enter your name" required />
          <Input name="lastName" type="text" label="Last name" placeholder="Enter your name" required />
          <Button type="submit" color="primary">Signup</Button>
          <Link href="/" className="text-blue-500 underline text-center">Already have an account ?</Link>
        </form>
    </main>
  );
}
