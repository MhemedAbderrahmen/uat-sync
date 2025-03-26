import SignIn from "@/components/forms/sign-in";
import Link from "next/link";
export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-2 xs:w-full lg:w-1/3 xl:w-1/4">
        <h1 className="text-2xl font-bold">Syncora</h1>
        <SignIn />
        <div className="flex w-full flex-row items-center justify-center space-x-2">
          <div>If you don&apos;t have an account</div>
          <Link href={"/sign-up"}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
