import { NextResponse } from "next/server";
import prisma from "../../../../../../../prisma/client";

export async function PATCH(req, { params }) {
  try {
    const { commentId } = await params;
    const body = await req.json();
    const { content } = body;

    const updateComment = await prisma.comment.update({
      where: { id: commentId },
      data: { content },
    });
    return NextResponse.json(updateComment, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to update comment." },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const { commentId } = await params;
    console.log(commentId);
    const deletedComment = await prisma.comment.delete({
      where: { id: commentId },
    });
    return NextResponse.json(deletedComment, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to update comment." },
      { status: 500 }
    );
  }
}
