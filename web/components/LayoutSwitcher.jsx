'use client';

import { usePathname } from 'next/navigation';
import Layout from './Layout';
import AdminLayout from './AdminLayout';

export default function LayoutSwitcher({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <AdminLayout>{children}</AdminLayout>;
  }
  return <Layout>{children}</Layout>;
}
