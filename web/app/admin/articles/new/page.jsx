import { redirect } from 'next/navigation';

export default function AdminArticleNewPage() {
  redirect('/admin/articles/new/edit');
}
