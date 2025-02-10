import React from "react";
import "./index.css";
import ListItem from "./ListItem.tsx";

function TodoList() {
  const questionList = [
    { id: 1, title: "标题1", isPublished: false },
    { id: 2, title: "标题2", isPublished: true },
    { id: 3, title: "标题3", isPublished: false },
    { id: 4, title: "标题4", isPublished: false },
  ];
  return (
    <>
      <h1>列表</h1>
      {questionList.map((item) => {
        return <ListItem key={item.id} listData={item} />;
      })}
    </>
  );
}

export default TodoList;
