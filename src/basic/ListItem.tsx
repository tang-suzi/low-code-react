import React, { FC } from "react";

const ListItem: FC = (props) => {
  const edit = (id: number) => {
    console.log(id);
  };
  const { id, title, isPublished } = props.listData;
  return (
    <div className="list-item">
      <strong>{title}</strong>
      &nbsp;
      {isPublished ? (
        <span style={{ color: "green" }}>已发布</span>
      ) : (
        <span>未发布</span>
      )}
      &nbsp;
      <button onClick={() => edit(id)}>编辑</button>
    </div>
  );
};

export default ListItem;
