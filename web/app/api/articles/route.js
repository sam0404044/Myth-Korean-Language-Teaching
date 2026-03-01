import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function GET() {
  try {
    const list = await prisma.article.findMany({
      where: { published: true },
      orderBy: { date: 'desc' },
    });
    const out = list.map((a) => ({ ...a, date: a.date.toISOString().slice(0, 10) }));
    return NextResponse.json(out);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: '伺服器錯誤' }, { status: 500 });
  }
}
