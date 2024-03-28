import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/utils";

type Props = {
  params: { id: string };
};

// GET SINGLE PRODUCT
export const GET = async (req: NextRequest, { params }: Props) => {
  const { id } = params;

  try {
    const product = await prisma.order.findUnique({
      where: { id: id },
    });

    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
