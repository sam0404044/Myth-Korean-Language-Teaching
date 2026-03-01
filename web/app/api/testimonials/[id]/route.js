import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id, 10);
    if (Number.isNaN(id)) return NextResponse.json({ error: '無效 ID' }, { status: 400 });
    const t = await prisma.testimonial.findUnique({ where: { id } });
    if (!t) return NextResponse.json({ error: '找不到見證' }, { status: 404 });
    return NextResponse.json(t);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: '伺服器錯誤' }, { status: 500 });
  }
}
