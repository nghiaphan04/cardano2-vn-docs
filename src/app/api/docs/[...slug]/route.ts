import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _req: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  const slug = params.slug.join("/");

  const doc = await prisma.documentation.findUnique({
    where: { slug },
  });

  if (!doc) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(doc);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  const slug = params.slug.join("/");
  const body = await req.json();

  const updated = await prisma.documentation.update({
    where: { slug },
    data: {
      title: body.title,
      content: body.content,
      description: body.description,
      folder: body.folder ?? null,
      authorId: body.authorId ?? null,
      updatedAt: new Date(),
      lastModified: new Date(),
    },
  });

  return NextResponse.json(updated);
}


export async function DELETE(
  _req: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  const slug = params.slug.join("/");

  await prisma.documentation.delete({
    where: { slug },
  });

  return NextResponse.json({ message: "Deleted" });
}
