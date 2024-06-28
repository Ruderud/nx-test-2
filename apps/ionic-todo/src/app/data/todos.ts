export type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

export default [
  {
    id: 1,
    title: '시장보기',
    description: '시장에 가서 장보기',
    completed: false,
  },
  {
    id: 2,
    title: '빨래하기',
    description: '빨래하기',
    completed: true,
  },
  {
    id: 3,
    title: '청소하기',
    description: '청소하기',
    completed: false,
  },
  {
    id: 4,
    title: '밥하기',
    description: '밥하기',
    completed: false,
  },
  {
    id: 5,
    title: '숙제하기',
    description: '숙제하기',
    completed: false,
  },
  {
    id: 6,
    title: '운동하기',
    description: '운동하기',
    completed: true,
  },
  {
    id: 7,
    title: '책읽기',
    description: '책읽기',
    completed: false,
  },
  {
    id: 8,
    title: '커피마시기',
    description: '커피마시기',
    completed: false,
  },
  {
    id: 9,
    title: '코딩하기',
    description: '코딩하기',
    completed: false,
  },
  {
    id: 10,
    title: '놀기',
    description: '놀기',
    completed: true,
  },
] satisfies Todo[];
