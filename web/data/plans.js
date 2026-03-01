export const plans = [
  { id: 1, name: '月訂閱', price: 399, period: 'month', description: '每月續訂，可隨時取消', published: true, sortOrder: 1 },
  { id: 2, name: '季訂閱', price: 999, period: 'quarter', description: '三個月方案', published: true, sortOrder: 2 },
  { id: 3, name: '年訂閱', price: 2999, period: 'year', description: '一年方案最划算', published: true, sortOrder: 3 },
];

export function getPlanById(id) {
  const num = parseInt(id, 10);
  return plans.find((p) => p.id === num) || null;
}
