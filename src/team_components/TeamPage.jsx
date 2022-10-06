import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaPencilAlt } from "react-icons/fa";

import AddBoardBtn from "../kb-components/AddBoardBtn";
import BoardItem from "../board_components/BoardItem";
import LeaveTeamBtn from "./LeaveTeamBtn";

import { loadTeam } from "../helper_functions/loadTeam";
import { useNavigate } from "react-router-dom";

function TeamPage() {
  const [team, setTeam] = useState();
  const params = useParams();
  const userId = localStorage.getItem("active-user-id");
  const navigate = useNavigate();
  const toLayout = () => navigate("/profilepage", { replace: true });

  useEffect(() => {
    const load = async () => {
      let team = await loadTeam(params.id);
      setTeam(team);
    };
    load();
  }, [params.id]);

  const handleSubmit = (e) => {
    const leaveTeam = async (data = {}) => {
      console.log("/api/team/" + params.id + "/leave?user_id=" + userId);
      //console.log(teamId);
      let response = await fetch(
        "/api/team/" + params.id + "/leave?user_id=" + userId,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);

      if (response.status === 200) {
        console.log("Left team successfully");
      }

      //let result = await response.json();
      //console.log(response);

      //return result;
    };

    leaveTeam().then(() => {
      toLayout();
      window.location.reload();
    });
  };
  // End handleSubmit.

  return (
    <div className="w-full">
      <div>
        <div className="flex flex-wrap p-2">
          {team && (
            <h1 className="flex-auto basis-4/5 flex-grow flex-shrink-0 text-3xl p-2">
              {team.teamName ? team.teamName : <span>[Name not set]</span>}
            </h1>
          )}
          <button className="flex-auto basis-1/5 flex-grow-0 flex-shrink p-2">
            <FaPencilAlt />
          </button>
          {team && (
            <p className="text-l p-2">
              {team.teamDescription ? (
                team.teamDescription
              ) : (
                <span>[Description not set]</span>
              )}
            </p>
          )}
        </div>
        <div className=" flex gap-4 py-10">
          <AddBoardBtn
            name={"Board name"}
            btnName={"Create board"}
            teamId={params.id}
          />
          <LeaveTeamBtn handleSubmit={handleSubmit} />
        </div>
      </div>

      <div className="w-[800px] rounded-md bg-light-grey flex flex-col justify-evenly">
        {team &&
          team.boards.map((board) => (
            <BoardItem
              teamId={params.id}
              key={board.id}
              boardId={board.id}
              boardName={board.boardName}
              boardDescription={board.boardDescription}
            />
          ))}
      </div>
    </div>
  );
}

export default TeamPage;
