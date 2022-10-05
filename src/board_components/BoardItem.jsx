import { Link } from "react-router-dom";

function BoardItem(props) {
  return (
    <Link
      to={`/boardpage/${props.boardId}`}
      className="flex flex-col rounded-lg pl-5 my-5 py-10 mx-5 text-start bg-white"
      key={props.boardId}
    >
      <div className="text-2xl font-bold mb-3">{props.boardName}</div>
      <div className="text-base font-normal">{props.boardDescription}</div>
    </Link>
  );
}

export default BoardItem;
