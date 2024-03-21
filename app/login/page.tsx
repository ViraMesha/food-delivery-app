"use client";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

import { Login } from "@/components/Login";

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();

  const handleSignIn = () => {
    signIn("google");
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === 'authenticated') {
    router.push('/')
  }

  return <Login handleSignIn={handleSignIn} />;
};

export default LoginPage;
