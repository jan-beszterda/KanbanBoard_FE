import { useNavigate, useParams } from "react-router-dom";
import { useWebSocket } from "../custom_hooks/useWebSocket";
import { useTeams } from "../custom_hooks/useTeams";

import CreateBtn from "../utility_components/CreateBtn";
import BoardItem from "../board_components/BoardItem";
import Button from "../utility_components/Button";

function TeamPage() {
  const navigate = useNavigate();
  const params = useParams();
  const team = useTeams(/*userId*/);
  const socketClient = useWebSocket(
    "topic/team/" + params.teamId,
    useTeams(/*userId*/)
  );

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
