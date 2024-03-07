import {Input, Button} from "@nextui-org/react";
import Link from "next/link";

export default function Page() {

  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen gap-10">
        <div>
          <h1 className='text-4xl font-bold'>Todo app</h1>
          <h2>signup !</h2>
        </div>
        <form className="flex flex-col gap-5">
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
