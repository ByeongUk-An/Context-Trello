import List from "./list/List";
import { v4 as uuid } from "uuid";
import React, { useState } from "react";
import store from "../context/store";
import Context from "../context/context";
import OpenInput from "./input/OpenInput";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  box: {
    display: "flex",
  },
}));

function App() {
  const classes = useStyle();
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

  const addList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      listsIds: [...data.listsIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };
  const upDateTitle = (titletext, id) => {
    const list = data.lists[id];
    list.title = titletext;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [id]: list,
      },
    };

    setData(newState);
  };

  return (
    <Context.Provider value={{ addingCard, addList, upDateTitle }}>
      <div className={classes.box}>
        {data.listsIds.map((item) => {
          const list = data.lists[item];
          return <List list={list} key={item} />;
        })}
        <OpenInput type="list" />
      </div>
    </Context.Provider>
  );
}

export default App;
