import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id, 10);
    if (Number.isNaN(id)) return NextResponse.json({ error: '無效 ID' }, { status: 400 });
    const course = await prisma.course.findFirst({
      where: { id, published: true },
      include: { chapters: { orderBy: { sortOrder: 'asc' } }, instructors: { include: { instructor: true } } },
    });
    if (!course) return NextResponse.json({ error: '找不到課程' }, { status: 404 });
    return NextResponse.json(course);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: '伺服器錯誤' }, { status: 500 });
  }
}
