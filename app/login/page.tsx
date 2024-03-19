"use client";
import { signIn, useSession } from "next-auth/react";

import { Login } from "@/components/Login";

const LoginPage = () => {
  const { data, status } = useSession();

  console.log("data" + data);
  console.log("status" + status);

  const handleSignIn = () => {
    signIn("google");
  };

  return <Login handleSignIn={handleSignIn} />;
};

export default LoginPage;
