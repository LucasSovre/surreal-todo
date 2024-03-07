import {Input, Button} from "@nextui-org/react";
import Link from "next/link";

export default function Page() {

  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen gap-10">
        <div>
          <h1 className='text-4xl font-bold'>Todo app</h1>
          <h2>Welcome !</h2>
        </div>
        <form className="flex flex-col gap-5">
          <Input name="email" type="email" label="Email" placeholder="Enter your email" />
          <Input name="password" type="password" label="Password" placeholder="Enter your password" />
          <Button type="submit" color="primary">Login</Button>
        </form>
        <Link href="/signup" className="text-blue-500 underline text-center">join us</Link>
    </main>
  );
}
