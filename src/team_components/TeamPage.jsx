import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaPencilAlt } from "react-icons/fa";

import AddBoardBtn from "../kb-components/AddBoardBtn";
import BoardItem from "../board_components/BoardItem";
import LeaveTeamBtn from "./LeaveTeamBtn";
import InviteUserBtn from "./InviteUserBtn";

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

      <div className="flex flex-wrap p-2 mb-6 border-b">
        {team && (
          <h1 className=" uppercase flex gap-5 flex-row flex-auto basis-4/5 flex-grow flex-shrink-0 text-3xl p-2 " >
            {team.teamName ? team.teamName : <span>[Name not set]</span>}
            <FaPencilAlt className=" cursor-pointer mt-2" onClick={console.log("hello")} color="#FF8E7F" size={"17px"} />

          </h1>
        )}
        <div className="flex-auto basis-1/5 flex-grow-0 flex-shrink p-2">
          <button className="mr-4">
          
          </button>
          <AddBoardBtn name={"Board name"} btnName={"Create board"} teamId={params.id}/>
          <InviteUserBtn name={"Invite user"} btnName={"Invite user"} teamId={params.id}/>
          <LeaveTeamBtn className="ml-4" handleSubmit={handleSubmit} />

        </div>
        {team && (
          <p className="text-l mt-4 p-2">
            {team.teamDescription ? (
              team.teamDescription
            ) : (
              <span>[Description not set]</span>
            )}
          </p>
        )}
      </div>
      <div className="flex gap-0 mb-6 border-b">
        <div className="basis-1/2 gap-2 border-r">
          <h3 className="text-xl font-bold border-b p-2">Members</h3>
          {team &&
            (team.teamMembers.length !== 0 ? (
              team.teamMembers.map((member) => (
                <p className="mb-2 p-2" key={member.userId}>
                  {member.firstName} {member.lastName} ({member.email})
                </p>
              ))
            ) : (
              <p className="mb-2 p-2">No members</p>
            ))}
        </div>
        <div className="basis-1/2 gap-2 border-l">
          <h3 className="text-xl font-bold border-b p-2">Invited users</h3>
          {team &&
            (team.invited.length !== 0 ? (
              team.invited.map((invitee) => (
                <p className="mb-2 p-2" key={invitee.userId}>
                  {invitee.firstName} {invitee.lastName} ({invitee.email})
                </p>
              ))
            ) : (
              <p className="mb-2 p-2">No invited users</p>
            ))}
        </div>
      </div>
      <div className=" rounded-md bg-light-grey flex flex-col justify-evenly">
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
        <AddBoardBtn
          name={"Board name"}
          btnName={"+ New board"}
          teamId={params.id}
        />
      </div>
    </div>
  );
}

export default TeamPage;
