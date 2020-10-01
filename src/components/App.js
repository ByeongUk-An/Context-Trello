import List from "./list/List";
import { v4 as uuid } from "uuid";
import React, { useState } from "react";
import store from "../context/store";
import Context from "../context/context";

function App() {
  const [data, setData] = useState(store);
  const addingCard = (title, listId) => {
    const newID = uuid();
    const newCard = {
      id: newID,
      title,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };
  return (
    <Context.Provider value={{ addingCard }}>
      {data.listsIds.map((item) => {
        const list = data.lists[item];
        return <List list={list} key={item} />;
      })}
    </Context.Provider>
  );
}

export default App;
