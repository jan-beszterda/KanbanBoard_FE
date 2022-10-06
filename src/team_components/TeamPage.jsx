import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CreateBtn from "../kb-components/CreateBtn";
import BoardItem from "../board_components/BoardItem";
import { loadTeam } from "../helper_functions/loadTeam";
import testData from '../testData/test-data.json'

function TeamPage() {

  /* const [team, setTeam] = useState();
  const params = useParams();
  const load = async () => {
  
    let team = await loadTeam(params.id);
    setTeam(team);
  };

  useEffect(() => {
    load();
  }, [params.id]);
*/
const {id} = useParams()

const teamName = testData.find((team) => team.id === id).teamName
const boards = testData.find((team) => team.id === id).boards

  return (
    <div className="w-full">
      <div>
        { <h1 className=" pt-5 text-3xl">{teamName}</h1>}

        <div className=" flex gap-4 py-10">
          <CreateBtn name={"Board name"} btnName={" Create board"} />
        </div>
      </div>

      <div className="w-[800px] rounded-md bg-light-grey flex flex-col justify-evenly">
     {boards.map((board) => (  <BoardItem key={board.id} teamId ={id} boardId = {board.id} boardName={board.boardName} boardDescription = {board.boardDescription} ></BoardItem> ))}

      </div>
    </div>
  );
}

export default TeamPage;
