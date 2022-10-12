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


  const handleSubmit=(e)=> {

  const createColumn = async (data = {}) => {
    let response = await fetch("/api/column/create?board_id=" + params.id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      console.log("Column created successfully");
    }

    //let result = await response.json();
    //console.log(result);

    //return result;
  };

  createColumn().then(() => {
    console.log("Success Creating Column");
    window.location.reload();
  });
} 

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
        <AddColBtn name={"Title"} btnName={"+ Add column"} handleSubmit={handleSubmit}></AddColBtn>
      </div>
    </div>
  );
}


export default BoardPage;