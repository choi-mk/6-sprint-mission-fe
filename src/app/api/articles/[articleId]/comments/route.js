import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma/client";

export async function POST(req, { params }) {
  try {
    const { articleId } = await params;
    const body = await req.json();
    const { content } = body;

    if (!content) {
      return NextResponse.json(
        { error: "content are required" },
        { status: 400 }
      );
    }

    const newComment = await prisma.comment.create({
      data: { articleId, content },
    });

    return NextResponse.json(newComment, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: "fail" }, { status: 500 });
  }
}
