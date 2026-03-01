export const members = [
  { id: 1, email: 'user1@example.com', name: '王小明', status: 'active', createdAt: '2024-06-01', planName: '月訂閱', planEnd: '2025-02-10' },
  { id: 2, email: 'user2@example.com', name: '李小花', status: 'active', createdAt: '2024-08-15', planName: '季訂閱', planEnd: '2025-04-12' },
  { id: 3, email: 'user3@example.com', name: '陳大華', status: 'active', createdAt: '2025-01-14', planName: null, planEnd: null },
];

export function getMemberById(id) {
  const num = parseInt(id, 10);
  return members.find((m) => m.id === num) || null;
}
