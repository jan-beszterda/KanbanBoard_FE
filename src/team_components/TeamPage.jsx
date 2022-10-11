import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaPencilAlt } from "react-icons/fa";
import React from "react";

import AddBoardBtn from "../kb-components/AddBoardBtn";
import BoardItem from "../board_components/BoardItem";
import LeaveTeamBtn from "./LeaveTeamBtn";
import InviteUserBtn from "./InviteUserBtn";
import CreateBtn from "../kb-components/CreateBtn";

import { loadTeam } from "../helper_functions/loadTeam";
import { createStompClient } from "../helper_functions/createStompClient";
import { editTeamName } from "../helper_functions/editTeams";
import {createBoard} from "../helper_functions/createBoard";

function TeamPage() {
  const [team, setTeam] = useState();
  const [client, setClient] = useState({});
  const [isToBeUpdated, setIsToBeUpdated] = useState(false);

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
    }
  }, [isToBeUpdated]);

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

  // edit team name
  const [teamName, setTeamName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setTeamName(e.target.value);
  };

  const edit = () => {
    editTeamName(params.id, teamName)
    setTeam({...team, teamName: teamName})
    closeModal();
  };

  //// add board
  const [showBoardModal, setShowBoardModal] = useState(false);


  const [newBoard, setNewBoard] = useState({
    boardName: "",
    boardDescription: "",
  });
  

const handleBoardNameChange = (e) => {
    setNewBoard({ ...newBoard, boardName: e.target.value });
  };

  const handleBoardDescriptionChange = (e) => {
    setNewBoard({ ...newBoard, boardDescription: e.target.value });
  };

    console.log(newBoard);
  

 
  const addBoard = () => {
    createBoard(newBoard, params.id);
    setTeam({...team, boards: [...team.boards, newBoard]})
    setShowBoardModal(false);
  };

  // End handleSubmit.


  return (
    <div className="w-full">
      <div className="flex flex-wrap p-2 mb-6 border-b">
        {team && (
          <h1 className=" capitalize flex gap-5 flex-row flex-auto basis-4/5 flex-grow flex-shrink-0 text-3xl p-2 ">
            {team.teamName ? team.teamName : <span>[Name not set]</span>}

            <FaPencilAlt
              className=" cursor-pointer mt-2"
              color="#FF8E7F"
              size={"17px"}
              type="button"
              onClick={() => setShowModal(true)}
            ></FaPencilAlt>
            {showModal ? (
              <CreateBtn
                edit={edit}
                closeModal={closeModal}
                btnType={"Edit"}
                value={teamName}
                onChange={handleChange}
              />
            ) : null}

          </h1>
        )}
        <div className="flex-auto basis-1/5 flex-grow-0 flex-shrink p-2">
          <button className="mr-4"></button>
          <InviteUserBtn
            name={"Invite user"}
            btnName={"Invite user"}
            teamId={params.id}
          />
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


      <button
        className="bg-white font-sans font-bold uppercase text-m my-5 mx-5 px-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowBoardModal(true)}
      >
        + Add board
      </button>
      {showBoardModal ? (
      
        <AddBoardBtn
          name={"Board name"}
          addBoard={addBoard}
          onDescriptionChange={handleBoardDescriptionChange}
          onTitleChange={handleBoardNameChange}
          closeModal={ () => setShowBoardModal(false)}
        />
      ) : null}




      
     
      </div>

    </div>

  );
}

export default TeamPage;
