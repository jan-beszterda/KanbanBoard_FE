import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { loadBoard } from "../helper_functions/loadBoard";
import Column from "../kb-components/Column";
import AddColBtn from "../kb-components/AddColBtn";
import testData from '../testData/test-data.json'
import { DragDropContext } from "react-beautiful-dnd";

function BoardPage() {

  
  /*const [board, setBoard] = useState();
  const params = useParams();

  useEffect(() => {
    const load = async () => {
      let board = await loadBoard(params.id);
      setBoard(board);
    };
    load();
  }, [params.id]);
  */
  const {teamid} = useParams()
  const {id} = useParams()
  const boardName = testData.find((team) => team.id === teamid).boards.find((board) =>board.id === id).boardName
  const columns = testData.find((team) => team.id === teamid).boards.find((board) => board.id === id).columnList 
  console.log(columns)

  return (
    <div>
      <div className="relative h-auto mb-10 mt-5 flex flex-col justify-start text-start gap-12 w-auto">
        { <h2 className="text-3xl mt-5 mr-5">{boardName}</h2>}
        <button className="text-start">Back</button>
      </div>
      <DragDropContext>
      <div className="flex flex-row justify-evenly gap-5 flex-nowrap">
        {
          columns.map((column) => (
            <Column
              key={column.id}
              columnId={column.id}
              columnTitle={column.columnTitle}
              cards={column.cardList}
              type = "card"
            />
          ))}
        <AddColBtn name={"Title"} btnName={"+ Add column"}></AddColBtn>
      </div>
      </DragDropContext>
      
    </div>
  );
}

export default BoardPage;
