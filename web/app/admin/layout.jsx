'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminRouteLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === '/admin/login';

  useEffect(() => {
    if (isLoginPage) return;
    const token = typeof window !== 'undefined' ? window.localStorage.getItem('admin_token') : null;
    if (!token) {
      router.replace('/admin/login');
    }
  }, [isLoginPage, router]);

  return <>{children}</>;
}
