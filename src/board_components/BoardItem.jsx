import React from "react";
import { Link } from "react-router-dom";

function BoardItem(props) {
  return (
    <div className="flex flex-col">
      <Link
        className="flex flex-col rounded-lg font-medium pl-5 my-5 py-10 mx-5 text-start bg-white"
        key={props.boardId}
        id={props.boardId}
        to={`/boardpage/${props.boardId}`}
      >
        {props.boardName} <span className="pt-2">{props.boardDescription}</span>
      </Link>
    </div>
  );
}

export default BoardItem;
