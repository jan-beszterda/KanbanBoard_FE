import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { loadBoard } from "../helper_functions/loadBoard";
import Column from "../kb-components/Column";
import AddColBtn from "../kb-components/AddColBtn";

function BoardPage() {
  const [board, setBoard] = useState();

  const params = useParams();

  useEffect(() => {
    const load = async () => {
      let board = await loadBoard(params.id);
      setBoard(board);
    };
    load();
  }, [params.id]);

  return (
    <div>
      <div className="relative h-auto mb-10 mt-5 flex flex-col justify-start text-start gap-12 w-auto">
        {board && <h2 className="text-3xl mt-5 mr-5">{board.boardName}</h2>}
        <button className="text-start">Back</button>
      </div>
      <div className="flex flex-row justify-evenly gap-5 flex-nowrap">
        {board &&
          board.columnList.map((column) => (
            <Column
              key={column.columnId}
              boardId={board.id}
              columnId={column.columnId}
              columnTitle={column.columnTitle}
              cards={column.cardList}
            />
          ))}
        <AddColBtn name={"Title"} btnName={"+ Add column"}></AddColBtn>
      </div>
    </div>
  );
}

export default BoardPage;
