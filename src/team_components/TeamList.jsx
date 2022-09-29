import { useNavigate } from "react-router-dom";

import Button from "../utility_components/Button";
import CreateBtn from "./CreateBtn";

function TeamList(props) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-around">
        <h6 class="mx-4 font-medium">My Teams</h6>
        {props.teams.map((team) => (
          <Button
            className={""}
            type={"button"}
            onClick={navigate(`/team/${team.id}`)}
            id={team.id}
          >
            {team.name}
          </Button>
        ))}
        <CreateBtn btnName={"+"} name={"Team name"} />
      </div>
    </div>
  );
}

export default TeamList;
