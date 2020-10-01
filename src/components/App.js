import List from "./list/List";
import React, { useState } from "react";
import store from "../context/store";

function App() {
  const [data, setData] = useState(store);
  return (
    <>
      {data.listsIds.map((item) => {
        const list = data.lists[item];
        return <List list={list} key={item} />;
      })}
    </>
  );
}

export default App;
