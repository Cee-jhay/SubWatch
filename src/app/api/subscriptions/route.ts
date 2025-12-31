import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    const body = await req.json();

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Dynamic import to avoid Turbopack issues
    const { prisma } = await import("@/lib/db");

    // Get user by email
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const sub = await prisma.subscription.create({
      data: {
        merchant: body.merchant,
        amount: body.amount,
        cycle: body.cycle,
        nextPaymentDate: new Date(body.nextPaymentDate),
        userId: user.id,
      },
    });

    return NextResponse.json(sub);
  } catch (error) {
    console.error("Subscription creation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
