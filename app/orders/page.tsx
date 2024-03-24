"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";

import { Orders } from "@/components/Orders";

const OrdersPage = () => {
  const { data: session, status } = useSession();
  const isAdmin = session?.user.isAdmin;
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/orders").then((res) => res.json()),
  });

  if (isLoading || status === "loading") return <p>Is loading...</p>;

  return <Orders orders={data} isAdmin={isAdmin} />;
};

export default OrdersPage;
