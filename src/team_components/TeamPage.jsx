import { useLocation, useNavigate, useParams } from "react-router-dom";
import { createStompClient } from "../custom_hooks/createStompClient";
import { useTeam } from "../custom_hooks/useTeam";

import CreateBtn from "../utility_components/CreateBtn";
import BoardItem from "../board_components/BoardItem";
import Button from "../utility_components/Button";
import { useEffect } from "react";
import { useState } from "react";

function TeamPage() {
  const params = useParams();

  const [team, setTeam] = useState(useTeam(params.teamId));
  const navigate = useNavigate();
  //const { state } = useLocation();
  //console.log(state);

  //const team = useTeams(/*userId*/);
  const stompClient = createStompClient(
    "topic/team/" + params.teamId,
    useTeam(params.teamId)
  );

  useEffect(() => {
    stompClient.activate();
    return () => {
      stompClient.deactivate();
    };
  }, []);

  const remove = () => {};
  console.log(team);

  return (
    <div>
      <h1 className="pt-5 text-3xl">{team.teamName}</h1>
      <p className="text-l">{team.teamDescription}</p>
      <h2 className="text-xl">Boards</h2>
      <div className="flex">
        {team.boards.map((board) => (
          <div className="">
            <Button
              className={""}
              type={"button"}
              onClick={navigate(`/board/${board.id}`)}
              id={board.id}
            >
              <div className="flex-col">
                <div>{board.boardName}</div>
                <div>{board.boardDescription}</div>
              </div>
            </Button>
            <Button className={""} type={"button"} onClick={remove()}>
              Delete board
            </Button>
          </div>
        ))}
      </div>
      <div className="flex gap-4 py-16">
        <CreateBtn name={"Board name"} btnName={" Create board"} />
      </div>
      <BoardItem />
    </div>
  );
}

export default TeamPage;
