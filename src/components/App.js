import List from "./list/List";
import { v4 as uuid } from "uuid";
import React, { useState } from "react";
import store from "../context/store";
import Context from "../context/context";
import OpenInput from "./input/OpenInput";
import { makeStyles } from "@material-ui/core";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Header from "./Header";
import SideNav from "./SideNav";

const useStyle = makeStyles((theme) => ({
  box: {
    display: "flex",
    height: "100vh",
    overflowX: "scroll",
    overflowY: "auto",
  },
}));

function App() {
  const classes = useStyle();
  const [data, setData] = useState(store);
  const [open, setOpen] = useState(false);

  const [bgUrl, setBgUrl] = useState("");
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

  const deleteList = (id) => {
    const newLists = {
      ...data.lists,
    };
    delete newLists[id]; //객체삭제방법
    const newIdArr = [...data.listsIds];
    const newReults = newIdArr.filter((item) => item !== id);
    const newState = {
      listsIds: newReults,
      lists: newLists,
    };
    setData(newState);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (type === "list") {
      const newListIds = data.listsIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
      return;
    }

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newState);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setData(newState);
    }
  };

  return (
    <Context.Provider value={{ addingCard, addList, upDateTitle, deleteList }}>
      <div
        style={{
          backgroundColor: "powderblue",
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header setOpen={setOpen} />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="app" type="list" direction="horizontal">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={classes.box}
              >
                {data.listsIds.map((item, index) => {
                  const list = data.lists[item];
                  return <List list={list} key={item} index={index} />;
                })}
                <OpenInput type="list" />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <SideNav open={open} setOpen={setOpen} setBgUrl={setBgUrl} />
      </div>
    </Context.Provider>
  );
}

export default App;
