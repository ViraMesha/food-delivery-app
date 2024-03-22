import { NextResponse } from "next/server";

import { prisma } from "@/utils";
import { getAuthSession } from "@/utils/auth";

// Fetch all orders
export const GET = async () => {
  const session = await getAuthSession();

  if (session) {
    try {
      if (session.user.isAdmin) {
        const orders = prisma.order.findMany();
        return new NextResponse(JSON.stringify(orders), { status: 200 });
      }
      const orders = prisma.order.findMany({
        where: {
          userEmail: session.user.email!,
        },
      });
      return new NextResponse(JSON.stringify(orders), { status: 200 });
    } catch (error) {
      console.error(error);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({ message: "You are not authenticated!" }),
      { status: 401 }
    );
  }
};
