"use client";
import { MyDropzone, StateType } from "@/components/common";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useState } from "react";

export default function Home() {
  const [files, setFiles] = useState<StateType>([]);
  return (
    <main className="w-screen min-h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
      <Button>Click me</Button>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <MyDropzone files={files} setFiles={setFiles} />
    </main>
  );
}
