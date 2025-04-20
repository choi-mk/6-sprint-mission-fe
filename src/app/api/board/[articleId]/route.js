import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function GET(req, { params }) {
  const { articleId } = await params;
  try {
    const article = await prisma.article.findUnique({
      where: { id: articleId },
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        comments: true,
      },
    });
    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }
    return NextResponse.json(article);
  } catch (e) {
    return NextResponse.json({ error: "Can't find article" }, { status: 500 });
  }
}

export async function PATCH(req, { params }) {
  try {
    const { articleId } = await params;
    const body = await req.json();
    const { title, content } = body;
    const updateArticle = await prisma.article.update({
      where: { id: articleId },
      data: { title, content },
    });
    return NextResponse.json(updateArticle, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to update comment." },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const { articleId } = await params;
    await prisma.article.delete({
      where: { id: articleId },
    });
    return NextResponse.json({ status: 201 });
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to update comment." },
      { status: 500 }
    );
  }
}
