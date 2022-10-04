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
        {board && <h1 className=" text-3xl mt-5 mr-5">{board.boardName}</h1>}

        <button className=" text-start">Back</button>
      </div>

      <div className="flex flex-row justify-evenly gap-5  ">
        {board &&
          board.columnList.map((column) => (
            <Column
              key={column.id}
              columnId={column.id}
              columnTitle={column.columnTitle}
              cards={column.cardList}
            />
          ))}

        <AddColBtn name={"Title"} btnName={"+ Add column"}></AddColBtn>
      </div>

      <div></div>
    </div>
  );
}

export default BoardPage;
