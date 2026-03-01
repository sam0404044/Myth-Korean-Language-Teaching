import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id, 10);
    if (Number.isNaN(id)) return NextResponse.json({ error: '無效 ID' }, { status: 400 });
    const article = await prisma.article.findFirst({
      where: { id, published: true },
    });
    if (!article) return NextResponse.json({ error: '找不到文章' }, { status: 404 });
    const out = { ...article, date: article.date.toISOString().slice(0, 10) };
    return NextResponse.json(out);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: '伺服器錯誤' }, { status: 500 });
  }
}
