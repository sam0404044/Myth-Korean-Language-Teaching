import { prisma } from './prisma.js';

export function getAdminIdFromToken(token) {
  if (!token || typeof token !== 'string') return null;
  const match = token.match(/^admin_(\d+)$/);
  return match ? parseInt(match[1], 10) : null;
}

export async function requireAdmin(request) {
  const auth = request.headers.get('authorization') || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
  const adminId = getAdminIdFromToken(token);
  if (!adminId) return { error: '未授權', status: 401 };
  const admin = await prisma.admin.findUnique({ where: { id: adminId } });
  if (!admin) return { error: '未授權', status: 401 };
  return { admin };
}
