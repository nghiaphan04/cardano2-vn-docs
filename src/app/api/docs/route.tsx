import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; 
// GET all documents
export async function GET() {
  const docs = await prisma.documentation.findMany({
    orderBy: { updatedAt: "desc" },
  });
  return NextResponse.json(docs);
}

// Create new document
export async function POST(req: NextRequest) {
  const body = await req.json();

  const doc = await prisma.documentation.create({
    data: {
      title: body.title,
      slug: body.slug, // ex: "guide/intro"
      content: body.content,
      description: body.description ?? "",
      folder: body.folder ?? null,
      authorId: body.authorId ?? null,
    },
  });

  return NextResponse.json(doc, { status: 201 });
}
