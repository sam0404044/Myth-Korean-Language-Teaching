import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password, name } = body || {};
    if (!email || !password) {
      return NextResponse.json({ ok: false, error: '請輸入 Email 與密碼' }, { status: 400 });
    }
    const existing = await prisma.user.findUnique({
      where: { email: String(email).trim() },
    });
    if (existing) {
      return NextResponse.json({ ok: false, error: '此 Email 已註冊' }, { status: 400 });
    }
    const user = await prisma.user.create({
      data: {
        email: String(email).trim(),
        passwordHash: bcrypt.hashSync(password, 10),
        name: name ? String(name).trim() : null,
        status: 'active',
      },
    });
    return NextResponse.json({
      ok: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: '伺服器錯誤' }, { status: 500 });
  }
}
