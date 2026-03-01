import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { requireAdmin } from '../../../../lib/auth';

export async function GET(request) {
  const auth = await requireAdmin(request);
  if (auth.error) return NextResponse.json({ error: auth.error }, { status: auth.status });
  try {
    const list = await prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
    });
    const withPlan = await Promise.all(
      list.map(async (u) => {
        const sub = await prisma.subscription.findFirst({
          where: { userId: u.id, status: 'active' },
          orderBy: { endAt: 'desc' },
          include: { plan: true },
        });
        return {
          ...u,
          planName: sub?.plan?.name ?? null,
          planEnd: sub?.endAt?.toISOString().slice(0, 10) ?? null,
        };
      })
    );
    return NextResponse.json(withPlan);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: '伺服器錯誤' }, { status: 500 });
  }
}
