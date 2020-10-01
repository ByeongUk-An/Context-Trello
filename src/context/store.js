const cards = [
  {
    id: "1",
    title: "first",
  },
  {
    id: "2",
    title: "two",
  },
  {
    id: "3",
    title: "three",
  },
];

const data = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "title-1",
      cards,
    },
    "list-2": {
      id: "list-2",
      title: "ti-2",
      cards: [],
    },
  },
  listsIds: ["list-1", "list-2"],
};

export default data;
