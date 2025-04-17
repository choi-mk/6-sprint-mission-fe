import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET() {
  try {
    const articles = await prisma.article.findMany();

    return NextResponse.json(articles);
  } catch (e) {
    return NextResponse.json({ error: "fail" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, content } = body;
    console.log(title);

    if (!title || !content) {
      return NextResponse.json(
        { error: "title and content are required" },
        { status: 400 }
      );
    }

    const newArticle = await prisma.article.create({
      data: { title, content },
    });

    return NextResponse.json(newArticle, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: "fail" }, { status: 500 });
  }
}
