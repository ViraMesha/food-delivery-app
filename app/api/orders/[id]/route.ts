import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/utils";

type Props = {
  params: { id: string };
};

export const PUT = async (req: NextRequest, { params }: Props) => {
  const { id } = params;

  try {
    const body = await req.json();
    await prisma.order.update({
      where: { id: id },
      data: { status: body },
    });

    return new NextResponse(
      JSON.stringify({ message: "Order has been updated!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
