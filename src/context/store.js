const cards = [
  {
    id: "1",
    title: "오늘은 일요일",
  },
  {
    id: "2",
    title: "내일은 월요일",
  },
  {
    id: "3",
    title: "출근 하고 싶다.",
  },
];

const data = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "취업준비",
      cards,
    },
    "list-2": {
      id: "list-2",
      title: "면접준비",
      cards: [],
    },
  },
  listsIds: ["list-1", "list-2"],
};

export default data;
