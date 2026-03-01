export const courses = [
  { id: 1, title: '課程範例 1', price: 1500, priceOriginal: 2000, description: '入門發音與基礎會話', category: 'beginner', published: true, sortOrder: 1, hasTrial: true },
  { id: 2, title: '課程範例 2', price: 1800, priceOriginal: null, description: '文法與閱讀', category: 'grammar', published: true, sortOrder: 2, hasTrial: false },
];

export const courseCategories = [
  { value: 'beginner', label: '入門' },
  { value: 'grammar', label: '文法' },
  { value: 'speaking', label: '會話' },
  { value: 'exam', label: '檢定' },
];

export function getCourseById(id) {
  const num = parseInt(id, 10);
  return courses.find((c) => c.id === num) || null;
}
