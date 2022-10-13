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

  return (
    <div className="w-full">
      <div className="flex relative h-auto mb-8 mt-2 flex-col justify-start text-start gap-12 w-auto">
        {board && (
          <>
            <div className="flex items-center">
              <h2 className="text-3xl p-2">
                {board.boardName ? board.boardName : "[Name not set]"}
              </h2>
              <UpdateBoardBtn
                board={board}
                setBoard={setBoard}
                stompClient={client}
              />
            </div>
            <div className=" flex flex-row items-center">
              <h1 className=" font-bold">Description : </h1>
              <p className="text-l p-2">
                {board.boardDescription
                  ? board.boardDescription
                  : "[Description not set]"}
              </p>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-row gap-5 flex-nowrap">
        {board &&
          board.columnList
            .sort((a, b) => {
              return a.columnId > b.columnId
                ? 1
                : a.columnId === b.columnId
                ? 0
                : -1;
            })
            .map((column) => (
              <Column
                key={column.columnId}
                boardId={board.id}
                column={column}
                stompClient={client}
                columns={board.columnList}
              />
            ))}
        {board && (
          <AddColBtn
            name={"Add new column"}
            btnName={"+ Add column"}
            boardId={board.id}
            stompClient={client}
          />
        )}
      </div>
    </div>
  );
}

export default BoardPage;
