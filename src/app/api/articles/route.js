import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const search = url.searchParams.get("search");
    const orderBy = url.searchParams.get("orderBy");

    const articles = await prisma.article.findMany({
      where: {
        title: {
          contains: search,
          mode: "insensitive",
        },
      },
      orderBy: {
        createdAt: orderBy,
      },
    });

    return NextResponse.json(articles);
  } catch (e) {
    return NextResponse.json({ error: "fail" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, content } = body;

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
