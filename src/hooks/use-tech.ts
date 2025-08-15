
// useTech 훅은 기술 스택 목록을 반환합니다.
// 배열의 각 항목을 한 줄에 하나씩 작성하여 가독성을 높였습니다.
// 추후 기술 스택이 추가/삭제될 때도 관리가 용이합니다.

export function useTech() {
    const data = [
    'React',
    'NextJS',
    'TypeScript',
    'Emotion',
    'Tanstack Query',
    'Recharts',
  ];

  return { data };
}