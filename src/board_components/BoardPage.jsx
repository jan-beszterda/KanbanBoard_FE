import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { loadBoard } from "../helper_functions/loadBoard";
import Column from "../kb-components/Column";
import AddColBtn from "../kb-components/AddColBtn";
import { createStompClient } from "../helper_functions/createStompClient";
import UpdateBoardBtn from "../kb-components/UpdateBoardBtn";

function BoardPage() {
  const [board, setBoard] = useState();
  const [client, setClient] = useState({});
  const [isToBeUpdated, setIsToBeUpdated] = useState(false);
  const params = useParams();

  useEffect(() => {
    const load = async () => {
      let board = await loadBoard(params.id);
      setBoard(board);
    };
    load();
  }, [params.id]);

  useEffect(() => {
    let stompClient = createStompClient("/topic/board/" + params.id, () =>
      setIsToBeUpdated(true)
    );
    setClient(stompClient);
    return () => {
      stompClient.deactivate();
    };
  }, []);

  useEffect(() => {
    if (isToBeUpdated) {
      const load = async () => {
        let board = await loadBoard(params.id);
        setBoard(board);
      };
      load();
      setIsToBeUpdated(false);
    }
  }, [isToBeUpdated]);

  // Make sure board exists before rendering the BoardPage.
  if (!board) return;

  return (
    <div>
      <div className="relative h-auto mb-10 mt-5 flex flex-col justify-start text-start gap-12 w-auto">
        {board && <h2 className="text-3xl mt-5 mr-5">{board.boardName}</h2>}
        <UpdateBoardBtn board={board} setBoard={setBoard}/>
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
              stompClient={client}
              columns={board.columnList}
            />
          ))}
        <AddColBtn
          name={"Add new column"}
          btnName={"+ Add column"}
          boardId={params.id}
          stompClient={client}
        />
      </div>
    </div>
  );
}

export default BoardPage;
