import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function POST(req) {
  try {
    const body = await req.json();
    const { password, nickname, email } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "title and content are required" },
        { status: 400 }
      );
    }

    const newuser = await prisma.user.create({
      data: { password, nickname, email },
    });

    return NextResponse.json(newuser, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: "fail" }, { status: 500 });
  }
}
