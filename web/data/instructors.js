export const instructors = [
  { id: 1, name: '金老師', title: '資深韓語講師', bio: '韓國留學多年，專長發音與會話', published: true, sortOrder: 1, courseIds: [1, 2] },
  { id: 2, name: '朴老師', title: 'TOPIK 專任', bio: '檢定與文法教學', published: true, sortOrder: 2, courseIds: [2] },
];

export function getInstructorById(id) {
  const num = parseInt(id, 10);
  return instructors.find((i) => i.id === num) || null;
}
