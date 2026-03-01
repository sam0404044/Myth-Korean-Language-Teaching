export const orders = [
  { id: 'ORD001', userId: 1, planId: 1, amount: 399, status: 'paid', paidAt: '2025-01-10T14:00:00', createdAt: '2025-01-10T13:58:00' },
  { id: 'ORD002', userId: 2, planId: 2, amount: 999, status: 'paid', paidAt: '2025-01-12T10:30:00', createdAt: '2025-01-12T10:28:00' },
  { id: 'ORD003', userId: 3, planId: 1, amount: 399, status: 'pending', paidAt: null, createdAt: '2025-01-14T09:00:00' },
];

export const subscriptions = [
  { userId: 1, planId: 1, startAt: '2025-01-10', endAt: '2025-02-10', status: 'active' },
  { userId: 2, planId: 2, startAt: '2025-01-12', endAt: '2025-04-12', status: 'active' },
];
