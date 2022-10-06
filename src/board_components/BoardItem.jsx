import { Link } from "react-router-dom";

function BoardItem({teamid,boardid,boardName,boardDescription}) {
  return (
    <Link
      to={`/boardpage/${teamid}/${boardid}`}
      className="flex flex-col rounded-lg pl-5 my-5 py-10 mx-5 text-start bg-white"
      key={boardid} teamId={teamid} boardId={boardid} boardName={boardName} boardDescription={boardDescription}
    >
      <div className="text-2xl font-bold mb-3">{boardName}</div>
      <div className="text-base font-normal">{boardDescription}</div>
    </Link>
  );
}

export default BoardItem;
