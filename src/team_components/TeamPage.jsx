import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import CreateBtn from "../kb-components/CreateBtn";
import AddBoardBtn from "../kb-components/AddBoardBtn";
import BoardItem from "../board_components/BoardItem";
import LeaveTeamBtn from "./LeaveTeamBtn";

import { loadTeam } from "../helper_functions/loadTeam";

function TeamPage() {
  const [team, setTeam] = useState();
  const params = useParams();

    useEffect(() => {
    const load = async () => {
      let team = await loadTeam(params.id);
      setTeam(team);
        };
        load();
      }, [params.id]);

  return (
    <div className="w-full">
      <div>
        {team && <h1 className=" pt-5 text-3xl">{team.teamName}</h1>}

        <div className=" flex gap-4 py-10">        
          <AddBoardBtn name={"Board name"} btnName={"Create board"} teamId={params.id}/>
          <LeaveTeamBtn/>
        </div>
      </div>

      <div className="w-[800px] rounded-md bg-light-grey flex flex-col justify-evenly">
        {team &&
          team.boards.map((board) => (
            <BoardItem
              key={board.id}
              boardId={board.boardId}
              boardName={board.boardName}
              boardDescription={board.boardDescription}
            />
          ))}
      </div>
    </div>
  );
}

export default TeamPage;
