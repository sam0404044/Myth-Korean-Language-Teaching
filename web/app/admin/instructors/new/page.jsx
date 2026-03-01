import { redirect } from 'next/navigation';

export default function AdminInstructorNewPage() {
  redirect('/admin/instructors/new/edit');
}
