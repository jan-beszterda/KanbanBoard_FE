import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaPencilAlt } from "react-icons/fa";
import React from "react";

import AddBoardBtn from "../kb-components/AddBoardBtn";
import BoardItem from "../board_components/BoardItem";
import LeaveTeamBtn from "./LeaveTeamBtn";
import InviteUserBtn from "./InviteUserBtn";

import { loadTeam } from "../helper_functions/loadTeam";
import { createStompClient } from "../helper_functions/createStompClient";
import { editTeam } from "../helper_functions/editTeams";
import EditTeamBtn from "../kb-components/EditTeamBtn";

function TeamPage() {
  const [team, setTeam] = useState();
  const [client, setClient] = useState({});
  const [isToBeUpdated, setIsToBeUpdated] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  useEffect(() => {
    let stompClient = createStompClient("/topic/team/" + params.id, () =>
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
        let team = await loadTeam(params.id);
        setTeam(team);
      };
      load();
      setIsToBeUpdated(false);
    }
  }, [isToBeUpdated]);

  const handleSubmit = () => {
    const leaveTeam = async () => {
      let response = await fetch(
        "/api/team/" + params.id + "/leave?user_id=" + userId,
        {
          method: "PUT",
        }
      );
      return response;
    };
    leaveTeam().then((response) => {
      if (response.status === 200) {
        client.publish({ destination: "/app/team/" + team.id });
        client.publish({ destination: "/app/teamlist/" + userId });
        toLayout();
      }
    });
  };

  const handleChange = (fieldName, fieldValue) => {
    setTeam({ ...team, [fieldName]: fieldValue });
  };

  const edit = () => {
    editTeam(team.id, team).then((response) => {
      if (response.status === 200) {
        team.teamMembers.map((member) => {
          client.publish({ destination: "/app/teamlist/" + member.userId });
        });
        client.publish({ destination: "/app/team/" + team.id });
        setShowModal(false);
      }
    });
  };

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-wrap p-2 mb-6 border-b">
        <div className="flex flex-col flex-grow flex-shrink-0 basis-4/5">
          <div className="flex items-center">
            {team && (
              <h1 className="capitalize text-3xl p-2 ">
                {team.teamName ? team.teamName : "[Name not set]"}
              </h1>
            )}
            {team && (
              <FaPencilAlt
                className="cursor-pointer mx-2 my-2"
                color="#FF8E7F"
                size={"20px"}
                type="button"
                onClick={() => setShowModal(true)}
              />
            )}
            {showModal ? (
              <EditTeamBtn
                edit={edit}
                closeModal={() => setShowModal(false)}
                btnType={"Edit"}
                values={team}
                onChange={handleChange}
              />
            ) : null}
          </div>
          {team && (
            <p className="text-l mt-4 p-2">
              {team.teamDescription
                ? team.teamDescription
                : "[Description not set]"}
            </p>
          )}
        </div>
        <div className="flex flex-col jusdtify-ityems-center basis-1/5 flex-grow-0 flex-shrink p-2">
          {team && (
            <InviteUserBtn
              name={"Invite user"}
              btnName={"Invite user"}
              teamId={team.id}
              stompClient={client}
            />
          )}
          <LeaveTeamBtn handleSubmit={handleSubmit} />
        </div>
      </div>
      <div className="flex gap-0 mb-6 border-b">
        <div className="basis-1/2 gap-2 border-r">
          <h3 className="text-xl font-bold border-b p-2">Members</h3>
          {team &&
            (team.teamMembers.length !== 0 ? (
              team.teamMembers.map((member) => (
                <p className="mb-2 p-2  capitalize" key={member.userId}>
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
      <div className=" rounded-md bg-light-grey flex flex-col mb-20 justify-evenly normal-case">
        {team &&
          team.boards.map((board) => (
            <BoardItem
              key={board.id}
              boardId={board.id}
              boardName={board.boardName}
              boardDescription={board.boardDescription}
            />
          ))}
        {team && (
          <AddBoardBtn
            name={"Add new board"}
            btnName={"+ New board"}
            teamId={team.id}
            stompClient={client}
          />
        )}
      </div>
    </div>
  );
}

export default TeamPage;
